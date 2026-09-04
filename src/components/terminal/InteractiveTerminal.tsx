import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, HelpCircle } from 'lucide-react';
import { executeCommand } from './terminalCommands';
import type { CommandOutput } from './terminalCommands';

interface HistoryItem {
  command: string;
  output: CommandOutput;
  timestamp: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'help',
      output: executeCommand('help'),
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>(['help']);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!input.trim()) return;
      
      const cmd = input.trim();
      if (cmd.toLowerCase() === 'clear') {
        setHistory([]);
        setInput('');
        setHistoryIndex(-1);
        return;
      }

      const output = executeCommand(cmd);
      setHistory((prev) => [
        ...prev,
        { command: cmd, output, timestamp: new Date().toLocaleTimeString() }
      ]);
      setCommandHistory((prev) => [...prev, cmd]);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandHistory.length) {
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const runQuickCommand = (cmd: string) => {
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }
    const output = executeCommand(cmd);
    setHistory((prev) => [
      ...prev,
      { command: cmd, output, timestamp: new Date().toLocaleTimeString() }
    ]);
    setCommandHistory((prev) => [...prev, cmd]);
  };

  const quickButtons = [
    'help',
    'about',
    'skills',
    'experience',
    'projects',
    'journey',
    'dsa',
    'contact',
    'github',
    'linkedin',
    'leetcode',
    'resume'
  ];

  return (
    <div className="w-full glass-panel rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1117] border-b border-slate-800 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs text-slate-400 font-medium ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            vivek@workspace:~
          </span>
        </div>

        <button
          onClick={() => setHistory([])}
          className="text-slate-400 hover:text-rose-400 p-1 rounded hover:bg-slate-800/60 transition-colors"
          title="Clear terminal"
          aria-label="Clear terminal output"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Action Pills */}
      <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto scrollbar-none">
        <span className="text-[11px] text-slate-400 shrink-0 flex items-center gap-1">
          <HelpCircle className="w-3 h-3 text-cyan-400" /> Quick:
        </span>
        {quickButtons.map((cmd) => (
          <button
            key={cmd}
            onClick={() => runQuickCommand(cmd)}
            className="px-2.5 py-0.5 rounded-full text-[11px] bg-slate-800/80 text-cyan-300 hover:bg-cyan-950 hover:text-cyan-200 border border-slate-700/60 hover:border-cyan-500/40 transition-colors shrink-0 cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 sm:p-5 max-h-[380px] min-h-[220px] overflow-y-auto space-y-4 leading-relaxed">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            {/* Prompt line */}
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-emerald-400 font-bold">vivek@workspace</span>
              <span className="text-slate-500">:</span>
              <span className="text-blue-400">~$</span>
              <span className="text-slate-100 font-semibold">{item.command}</span>
              <span className="text-[10px] text-slate-400 ml-auto">{item.timestamp}</span>
            </div>

            {/* Output Lines */}
            <div className="pl-4 border-l-2 border-slate-800">
              {Array.isArray(item.output.content) ? (
                item.output.content.map((line, lIdx) => (
                  <div
                    key={lIdx}
                    className={`whitespace-pre-wrap ${
                      item.output.type === 'error'
                        ? 'text-rose-400'
                        : item.output.type === 'success'
                        ? 'text-emerald-300'
                        : 'text-slate-300'
                    }`}
                  >
                    {line}
                  </div>
                ))
              ) : (
                <div
                  className={`whitespace-pre-wrap ${
                    item.output.type === 'error' ? 'text-rose-400' : 'text-slate-300'
                  }`}
                >
                  {item.output.content}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Input Prompt */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-emerald-400 font-bold shrink-0">vivek@workspace</span>
          <span className="text-slate-500 shrink-0">:</span>
          <span className="text-blue-400 shrink-0">~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-slate-100 outline-none border-none focus:ring-0 text-xs sm:text-sm font-mono placeholder:text-slate-600"
            aria-label="Terminal input prompt"
          />
          <CornerDownLeft className="w-3.5 h-3.5 text-slate-600 shrink-0" />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
