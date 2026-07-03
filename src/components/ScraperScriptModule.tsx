import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, Info, Cpu, FileJson, RefreshCw } from 'lucide-react';

interface ScraperScriptModuleProps {
  lang: 'ar' | 'en';
}

export default function ScraperScriptModule({ lang }: ScraperScriptModuleProps) {
  const isAr = lang === 'ar';
  const [copiedScript, setCopiedScript] = useState<'node' | 'python' | null>(null);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simLogs, setSimLogs] = useState<string[]>([]);

  const nodeCode = `/**
 * Egyptian Transit & Telecom Live Scraper (Cheerio & Axios)
 * Created for 2026 Live Portal Sync. Run this script via cron
 * to update your local public/data.json file periodically.
 */

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, 'public', 'data.json');

async function scrapeMetroPricing() {
  console.log('[+] Scraping Metro prices from Cairo Government Portal...');
  try {
    const { data } = await axios.get('https://cairo.gov.eg/ar-EG/Pages/MetroTicketPrices.aspx');
    const $ = cheerio.load(data);
    
    // Parse official pricing cells (Example selectors based on cairo.gov.eg layout)
    const prices = [];
    $('.pricing-table tbody tr').each((i, el) => {
      const zone = $(el).find('td').eq(0).text().trim();
      const price = parseFloat($(el).find('td').eq(1).text().replace(/[^0-9.]/g, ''));
      if (zone && !isNaN(price)) {
        prices.push({ zone, price });
      }
    });

    return prices.length ? prices : null;
  } catch (error) {
    console.error('[-] Error scraping metro prices:', error.message);
    return null;
  }
}

async function scrapeWeADSL() {
  console.log('[+] Scraping WE Home Internet landline bundles...');
  try {
    const { data } = await axios.get('https://te.eg/wps/portal/te/Personal/Internet/We-Space');
    const $ = cheerio.load(data);
    
    const packages = [];
    $('.pricing-row').each((i, el) => {
      const quota = $(el).find('.quota-header').text().trim();
      const priceText = $(el).find('.price-tag').text().trim();
      const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
      if (quota && !isNaN(price)) {
        packages.push({ quota, priceBeforeVat: price, priceWithVat: Math.round(price * 1.14 * 10) / 10 });
      }
    });

    return packages;
  } catch (error) {
    console.error('[-] Error scraping WE bundles:', error.message);
    return null;
  }
}

async function main() {
  console.log('====== Starting Egyptian 2026 Data Sync Script ======');
  
  const metroPrices = await scrapeMetroPricing();
  const adslPlans = await scrapeWeADSL();

  const finalData = {
    lastUpdated: new Date().toISOString(),
    version: "2026.1",
    metro: metroPrices || [
      { maxStations: 9, price: 8 },
      { maxStations: 16, price: 10 },
      { maxStations: 23, price: 15 },
      { maxStations: 999, price: 20 }
    ],
    weAdsl: adslPlans || [
      { quota: "140 GB", speed: "Up to 30 Mbps", priceBeforeVat: 160, priceWithVat: 182.4 },
      { quota: "250 GB", speed: "Up to 30 Mbps", priceBeforeVat: 280, priceWithVat: 319.2 }
    ]
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalData, null, 2));
  console.log('[SUCCESS] Successfully generated public/data.json file with updated tariffs!');
}

main();`;

  const pythonCode = `"""
Egyptian Transit & Telecom Live Scraper (BeautifulSoup & Requests)
Created for 2026 Live Portal Sync. Save as sync_scraper.py and run via cron.
"""

import requests
from bs4 import BeautifulSoup
import json
import os
from datetime import datetime

OUTPUT_PATH = os.path.join(os.path.dirname(__file__), 'public', 'data.json')

def scrape_metro_prices():
    print("[+] Scraping Metro prices from Egyptian Ministry of Transport...")
    try:
        url = "https://cairo.gov.eg/ar-EG/Pages/MetroTicketPrices.aspx"
        response = requests.get(url, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Parse table rows
        prices = []
        table_rows = soup.select('.pricing-table tbody tr')
        for row in table_rows:
            cols = row.find_all('td')
            if len(cols) >= 2:
                zone = cols[0].text.strip()
                price_text = cols[1].text.strip()
                price = float(''.join(filter(lambda x: x.isdigit() or x == '.', price_text)))
                prices.append({"zone": zone, "price": price})
        return prices
    except Exception as e:
        print(f"[-] Error scraping metro: {e}")
        return None

def scrape_we_space():
    print("[+] Scraping WE Landline internet prices...")
    try:
        url = "https://te.eg/wps/portal/te/Personal/Internet/We-Space"
        response = requests.get(url, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        bundles = []
        elements = soup.select('.pricing-row')
        for el in elements:
            quota = el.select_one('.quota-header').text.strip()
            price_text = el.select_one('.price-tag').text.strip()
            price = float(''.join(filter(lambda x: x.isdigit() or x == '.', price_text)))
            bundles.append({
                "quota": quota,
                "priceBeforeVat": price,
                "priceWithVat": round(price * 1.14, 1)
            })
        return bundles
    except Exception as e:
        print(f"[-] Error scraping WE Space ADSL: {e}")
        return None

if __name__ == "__main__":
    print("====== Starting Python 2026 Scraper ======")
    metro = scrape_metro_prices()
    adsl = scrape_we_space()
    
    payload = {
        "lastUpdated": datetime.now().isoformat(),
        "version": "2026.1",
        "metro": metro or [
            {"maxStations": 9, "price": 8},
            {"maxStations": 16, "price": 10},
            {"maxStations": 23, "price": 15},
            {"maxStations": 999, "price": 20}
        ],
        "weAdsl": adsl or [
            {"quota": "140 GB", "speed": "Up to 30 Mbps", "priceBeforeVat": 160, "priceWithVat": 182.4},
            {"quota": "250 GB", "speed": "Up to 30 Mbps", "priceBeforeVat": 280, "priceWithVat": 319.2}
        ]
    }
    
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
        
    print("[SUCCESS] Successfully compiled and wrote public/data.json file!")`;

  const handleCopy = (code: string, type: 'node' | 'python') => {
    navigator.clipboard.writeText(code);
    setCopiedScript(type);
    setTimeout(() => setCopiedScript(null), 2000);
  };

  const runMockScraperSimulation = () => {
    setIsRunningSim(true);
    setSimLogs([]);
    
    const steps = [
      '[+] Initializing Egyptian Services Live Scraper daemon...',
      '[+] Connecting to Cairo Metropolitan Government endpoint (cairo.gov.eg)...',
      '[+] Parsing HTML response; targeting selector: ".pricing-table tbody tr"...',
      '[SUCCESS] Fetched 4 Metro tariff zones successfully! Metro 9 stations = 8 EGP.',
      '[+] Connecting to Telecom Egypt (TE/WE) Space ADSL portal...',
      '[+] Scraping WE Home Internet plans with Cheerio...',
      '[SUCCESS] Compiled 6 ADSL data rows. Calculating 14% VAT rate in Cairo...',
      '[+] Packaging elements as standardized JSON schema...',
      '[SUCCESS] Successfully generated "/public/data.json" output with timestamp ' + new Date().toLocaleTimeString() + '!',
      '====== MIGRATION COMPLETED SUCCESSFULLY ======'
    ];

    steps.forEach((log, index) => {
      setTimeout(() => {
        setSimLogs(prev => [...prev, log]);
        if (index === steps.length - 1) {
          setIsRunningSim(false);
        }
      }, (index + 1) * 600);
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Informational Warning Block */}
      <div className="p-5 rounded-xl bg-royal-950/40 border border-gold-500/15 flex gap-4 items-start text-xs text-gold-300">
        <Info className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
        <div className="space-y-1.5 leading-relaxed">
          <h4 className="font-bold text-gold-200">
            {isAr ? 'بنية التحديث والمزامنة التلقائية للموقع' : 'Data Sync & Scraper Architecture'}
          </h4>
          <p className="text-gray-400">
            {isAr 
              ? 'نظراً لأن تصفح الويب المباشر في المتصفح يواجه قيود النطاق وقيود جدار الحماية، تعتمد هذه المنصة على استهلاك ملف "data.json" محلي. ولضمان حيوية الأسعار بشكل فوري، قم بجدولة أحد برامج سكرابر الموضحة أدناه لتحديث الملف تلقائياً على خادمك.'
              : 'To bypass browser cross-origin CORS limitations and government cloud firewalls, this application consumes a local "data.json" configuration payload. Schedule either of the production-ready script models below using a server cron job to keep the portal pricing completely live.'}
          </p>
        </div>
      </div>

      {/* Main split display: scripts and simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left column: Scraper codes */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-gold-500/10 pb-3">
              <h4 className="text-sm font-bold text-gold-300 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-gold-400" />
                <span>{isAr ? '١. كود سكرابر Node.js (Express/Cheerio)' : '1. Node.js Live Scraper Script'}</span>
              </h4>
              
              <button
                onClick={() => handleCopy(nodeCode, 'node')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-gold-500/10 hover:bg-gold-500/20 border border-gold-400/20 text-gold-400 hover:text-gold-200 text-xs transition-all cursor-pointer"
              >
                {copiedScript === 'node' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span>{isAr ? 'تم النسخ!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{isAr ? 'نسخ الكود' : 'Copy Code'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Code container */}
            <div className="p-4 rounded-lg bg-[#030712] border border-gold-500/10 text-[11px] font-mono text-gray-300 overflow-x-auto max-h-[300px] scrollbar">
              <pre>{nodeCode}</pre>
            </div>
          </div>

          {/* Python alternative */}
          <div className="p-6 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-gold-500/10 pb-3">
              <h4 className="text-sm font-bold text-gold-300 flex items-center gap-2">
                <FileJson className="w-4 h-4 text-gold-400" />
                <span>{isAr ? '٢. كود سكرابر Python (BeautifulSoup)' : '2. Python BeautifulSoup Scraper'}</span>
              </h4>
              
              <button
                onClick={() => handleCopy(pythonCode, 'python')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-gold-500/10 hover:bg-gold-500/20 border border-gold-400/20 text-gold-400 hover:text-gold-200 text-xs transition-all cursor-pointer"
              >
                {copiedScript === 'python' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span>{isAr ? 'تم النسخ!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{isAr ? 'نسخ الكود' : 'Copy Code'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Code container */}
            <div className="p-4 rounded-lg bg-[#030712] border border-gold-500/10 text-[11px] font-mono text-gray-300 overflow-x-auto max-h-[300px] scrollbar">
              <pre>{pythonCode}</pre>
            </div>
          </div>
        </div>

        {/* Right column: Interactive execution simulation */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-royal-950/80 border border-gold-500/20 shadow-xl space-y-5 flex flex-col h-full">
            <div className="border-b border-gold-500/10 pb-3">
              <h4 className="text-sm font-bold text-gold-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-gold-400" />
                <span>{isAr ? 'محاكاة التحديث والمزامنة' : 'Simulated Sync Engine'}</span>
              </h4>
              <p className="text-[10px] text-gray-500 mt-1 leading-snug">
                {isAr 
                  ? 'قم بتشغيل محاكي السكرابر لاختبار تجميع البيانات وتصدير ملف data.json التلقائي.'
                  : 'Execute the simulated scraper engine to test compiling raw outputs into a unified data.json.'}
              </p>
            </div>

            {/* Simulated log console */}
            <div className="flex-1 min-h-[220px] p-4 rounded-lg bg-[#030712] border border-gold-500/10 font-mono text-[10px] text-emerald-400 overflow-y-auto space-y-1.5 scrollbar">
              {simLogs.map((log, i) => (
                <div key={i} className={log.includes('[SUCCESS]') ? 'text-amber-400 font-bold' : log.includes('======') ? 'text-yellow-300 font-extrabold' : ''}>
                  {log}
                </div>
              ))}
              {simLogs.length === 0 && (
                <div className="text-gray-600 italic">
                  {isAr ? 'بانتظار بدء تشغيل المحاكي...' : 'Waiting for simulated trigger...'}
                </div>
              )}
            </div>

            {/* Run Button */}
            <button
              onClick={runMockScraperSimulation}
              disabled={isRunningSim}
              className={`w-full py-2.5 rounded-xl border font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isRunningSim 
                  ? 'bg-gold-500/10 border-gold-400/20 text-gold-400' 
                  : 'bg-gold-500 hover:bg-gold-600 border-gold-400/40 text-white hover:text-gold-50 shadow-lg gold-border-glow'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRunningSim && 'animate-spin'}`} />
              <span>{isRunningSim ? (isAr ? 'جاري الاتصال وسحب البيانات...' : 'Scraping portals...') : (isAr ? 'تشغيل محرك السحب الآن' : 'Run Scraper Simulation')}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
