/**
 * =================================================================================
 *                 البوابة الوطنية الموحدة للخدمات - نظام الربط اللحظي بـ Firebase
 *        NATIONAL INTEGRATED SERVICES HUB - FIREBASE REAL-TIME SYNCHRONIZATION
 * =================================================================================
 * 
 * هذا الملف يحتوي على الكود البرمجي الكامل والجاهز لربط الواجهة الأمامية بقاعدة بيانات 
 * Firebase Cloud Firestore لتقديم تحديثات حية وفورية لأسعار الخدمات والمواصلات.
 * 
 * This file contains the complete, ready-to-use JavaScript code to connect the 
 * frontend with Firebase Cloud Firestore for real-time rates & services updates.
 */

// 1. استدعاء مكتبات Firebase (App و Firestore) باستخدام روابط CDN حديثة ومتوافقة مع المتصفحات الحديثة
// Importing modern ES modules of Firebase App & Firestore via official Google CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, onSnapshot, collection, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 2. تهيئة إعدادات Firebase (مع قيم فارغة للتخصيص اللاحق من قبل المستخدم)
// Firebase Configuration Object with placeholders for user keys.
// الرجاء استبدال القيم أدناه ببيانات مشروعك الخاصة من لوحة تحكم Firebase Console
const firebaseConfig = {
  /*
   * [AR] مفتاح الـ API الفريد لتطبيق الويب الخاص بك.
   * [EN] The unique Web API Key for your Firebase project.
   */
  apiKey: "YOUR_FIREBASE_API_KEY_HERE",

  /*
   * [AR] نطاق المصادقة المخصص لمشروعك (مثال: myproject.firebaseapp.com).
   * [EN] The domain for Firebase Authentication (e.g., myproject.firebaseapp.com).
   */
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN_HERE",

  /*
   * [AR] المعرف الفريد لمشروعك على غوغل كلاود و Firebase.
   * [EN] The unique Firebase project ID.
   */
  projectId: "YOUR_FIREBASE_PROJECT_ID_HERE",

  /*
   * [AR] وعاء التخزين الافتراضي لملفات المشروع.
   * [EN] The default Cloud Storage bucket.
   */
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET_HERE",

  /*
   * [AR] المعرف الخاص بخدمات الرسائل السحابية.
   * [EN] Sender ID for Cloud Messaging.
   */
  messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID_HERE",

  /*
   * [AR] المعرف الفريد لتطبيق الويب المربوط بـ Firebase.
   * [EN] The unique App ID for this web interface.
   */
  appId: "YOUR_FIREBASE_APP_ID_HERE",

  /*
   * [AR] معرف قياس Google Analytics (اختياري).
   * [EN] Optional Google Analytics Measurement ID.
   */
  measurementId: "YOUR_FIREBASE_MEASUREMENT_ID_HERE"
};

// 3. تهيئة التطبيق والاتصال بـ Firestore
// Initialize Firebase & Establish Firestore Database Reference
let app;
let db;

try {
  // للتحقق من عدم وجود تهيئة مسبقة لنفس التطبيق
  // Safe initialization wrapper
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("▲ [Firebase] Connection initialized successfully! / تم تهيئة الاتصال بـ فيربيز بنجاح!");
} catch (error) {
  console.error("❌ [Firebase] Initialization failed / فشل في تهيئة فيربيز:", error);
}

// 4. دالة للاستماع اللحظي (onSnapshot) لأي تغييرات تطرأ على أسعار التذاكر والمواصلات
// Real-time listener for Transportation rates & pricing parameters
export function listenToTransportationPricing(onUpdateCallback) {
  if (!db) return () => {};

  console.log("🛰️ [Firebase] Listening to 'transportation_pricing' collection updates...");
  
  // الاستماع لمجموعة 'transportation_pricing' أو وثيقة محددة مثل 'metro_rates'
  const pricingCollection = collection(db, "transportation_pricing");
  
  const unsubscribe = onSnapshot(pricingCollection, (snapshot) => {
    snapshot.forEach((changeDoc) => {
      const data = changeDoc.data();
      console.log(`✨ [Firebase] Price Update Detected in document ${changeDoc.id}:`, data);
      
      // نقوم بإرسال البيانات المحدثة عبر الـ callback لتحديث الـ React State والـ DOM فوراً
      if (onUpdateCallback) {
        onUpdateCallback(changeDoc.id, data);
      }
    });
  }, (error) => {
    console.error("❌ [Firebase] Error listening to pricing updates / خطأ في الاستماع للأسعار:", error);
  });

  return unsubscribe;
}

// 5. دالة للاستماع اللحظي (onSnapshot) لأي تغييرات تطرأ على الخدمات الحكومية وأسعارها
// Real-time listener for Government Services, fees, requirements and descriptions
export function listenToGovernmentServices(onUpdateCallback) {
  if (!db) return () => {};

  console.log("🛰️ [Firebase] Listening to 'government_services' collection updates...");
  
  const servicesCollection = collection(db, "government_services");
  
  const unsubscribe = onSnapshot(servicesCollection, (snapshot) => {
    const updatedServices = [];
    snapshot.forEach((serviceDoc) => {
      updatedServices.push({
        id: serviceDoc.id,
        ...serviceDoc.data()
      });
    });
    
    console.log(`✨ [Firebase] Government Services Synchronized (${updatedServices.length} items)`);
    
    if (onUpdateCallback) {
      onUpdateCallback(updatedServices);
    }
  }, (error) => {
    console.error("❌ [Firebase] Error listening to government services / خطأ في استرداد الخدمات:", error);
  });

  return unsubscribe;
}

// 6. دالة مساعدة لتحديث الأسعار في قاعدة البيانات مباشرة من واجهة التحكم (اختياري ومفيد للمدراء)
// Helper utility to write updates back to Firestore from the Admin Panel
export async function updatePricingInFirestore(docId, updatedFields) {
  if (!db) {
    console.warn("⚠️ [Firebase] DB not initialized. Cannot update / لم يتم تهيئة فيربيز.");
    return false;
  }
  
  try {
    const docRef = doc(db, "transportation_pricing", docId);
    await updateDoc(docRef, updatedFields);
    console.log(`✅ [Firebase] Successfully updated ${docId} on Firestore!`);
    return true;
  } catch (err) {
    console.error(`❌ [Firebase] Error updating document ${docId}:`, err);
    return false;
  }
}
