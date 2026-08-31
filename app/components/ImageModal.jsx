'use client';

import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ImageModal({ src, onClose }) {
  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all">
      <div className="relative max-w-5xl w-full bg-[#08120b] rounded-2xl border border-emerald-500/40 p-4 overflow-hidden shadow-2xl space-y-3">
        <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
          <div className="flex items-center gap-2">
            <img src="/logo.webp" alt="Logo" className="w-6 h-6 object-contain" />
            <span className="text-sm font-bold text-white">
              ASLOR ENTERPRISES • Solar Solutions Guide
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
            >
              <span>Open Original</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-slate-300 hover:text-white border border-emerald-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="max-h-[80vh] overflow-auto rounded-xl border border-emerald-950 bg-black flex justify-center">
          <img
            src={src}
            alt="Solar Guide Full View"
            className="w-auto max-w-full h-auto object-contain"
          />
        </div>

        <div className="text-center text-xs text-slate-400 pt-1">
          Scroll or zoom inside modal to view detailed diagrams. Powered by certified solar technology.
        </div>
      </div>
    </div>
  );
}
