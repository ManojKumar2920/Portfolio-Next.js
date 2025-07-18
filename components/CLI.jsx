'use client'
import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const CLICopyComponent = () => {
    const [copied, setCopied] = useState(false);

    const command = 'npx mano-cli';

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-lg odd:rotate-1 even:-rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out">
           
            <div className="mt-8 bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-2 text-gray-400 text-sm">Terminal</span>
                </div>
                <div className="p-6 font-mono text-sm">
                    <div className=' flex w-full justify-between items-center'>

                        <div className="text-green-400 mb-2">$ npx mano-cli</div>
                        <button
                            onClick={handleCopy}
                            className="ml-auto p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 transition-all hover:scale-110"
                            title="Copy command"
                        >
                            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </button>
                    </div>
                    <div className="text-cyan-400 mb-4">
                        <pre className="text-[9px] leading-relaxed">
                            {`
███╗   ███╗ █████╗ ███╗   ██╗ ██████╗ 
████╗ ████║██╔══██╗████╗  ██║██╔═══██╗
██╔████╔██║███████║██╔██╗ ██║██║   ██║
██║╚██╔╝██║██╔══██║██║╚██╗██║██║   ██║
██║ ╚═╝ ██║██║  ██║██║ ╚████║╚██████╔╝
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝
`}
                        </pre>
                    </div>
                    <div className="text-green-400 mb-2">Software Engineer, India</div>
                    <div className="text-yellow-400 mb-4">Building the future, one line at a time</div>
                    <div className="text-gray-300">
                        I'm Mano — a Software Engineer focused on building end-to-end full-stack applications and<br />
                        AI-powered solutions that actually make a difference.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CLICopyComponent;