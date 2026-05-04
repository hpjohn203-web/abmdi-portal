import { useState } from 'react';
import { VIDEO_LIBRARY } from '../data/videos.js';

function getYouTubeId(url) {
  const match = url.match(/(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default function VideoLibrary({ onNavigate }) {
  const [search, setSearch] = useState('');
  const [activeGroup, setActiveGroup] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const filtered = VIDEO_LIBRARY.map(group => ({
    ...group,
    videos: group.videos.filter(v =>
      v.title.toLowerCase().includes(search.toLowerCase()) ||
      group.group.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(g => g.videos.length > 0);

  if (activeVideo) {
    const vid = getYouTubeId(activeVideo.url);
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col max-w-lg mx-auto">
        <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-800">
          <button onClick={() => setActiveVideo(null)} className="text-slate-400 hover:text-slate-200 p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-sm font-semibold line-clamp-1">{activeVideo.title}</h1>
        </div>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-4">
          <h2 className="font-semibold mb-1">{activeVideo.title}</h2>
          <a href={activeVideo.url} target="_blank" rel="noreferrer" className="text-xs text-amber-400 underline">
            Open on YouTube ↗
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col max-w-lg mx-auto">
      <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-800">
        <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-200 p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-bold">Video Library</h1>
        <span className="ml-auto text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-full">
          {VIDEO_LIBRARY.reduce((a, g) => a + g.videos.length, 0)} videos
        </span>
      </div>

      {/* Search */}
      <div className="px-4 py-3">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          <input
            type="text"
            placeholder="Search topics or videos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Group chips */}
      <div className="flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => setActiveGroup(null)}
          className={`shrink-0 text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${!activeGroup ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}
        >
          All
        </button>
        {VIDEO_LIBRARY.map(g => (
          <button
            key={g.group}
            onClick={() => setActiveGroup(g.group === activeGroup ? null : g.group)}
            className={`shrink-0 text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${activeGroup === g.group ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}
          >
            {g.group}
          </button>
        ))}
      </div>

      {/* Video list */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-5">
        {filtered
          .filter(g => !activeGroup || g.group === activeGroup)
          .map(group => (
            <div key={group.group}>
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{group.group}</h2>
              <div className="space-y-2">
                {group.videos.map(video => {
                  const vid = getYouTubeId(video.url);
                  return (
                    <button
                      key={video.url}
                      onClick={() => setActiveVideo(video)}
                      className="w-full flex items-center gap-3 bg-slate-800 hover:bg-slate-700 rounded-2xl p-3 text-left transition-colors active:scale-[0.98]"
                    >
                      {/* Thumbnail */}
                      <div className="relative shrink-0 w-20 h-12 rounded-lg overflow-hidden bg-slate-700">
                        {vid && (
                          <img
                            src={`https://img.youtube.com/vi/${vid}/mqdefault.jpg`}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-2 text-slate-200">{video.title}</p>
                        <p className="text-xs text-amber-400 mt-0.5">▶ Watch now</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
