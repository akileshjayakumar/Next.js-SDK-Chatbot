"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { SiReact, SiTailwindcss, SiTypescript, SiOpenai } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillRobot } from "react-icons/ai";
import { TbSdk } from "react-icons/tb";
import "@/app/globals.css";

function ToolsUsed() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <SiReact size={30} title="React" style={{ color: "#61DAFB" }} />
        {/* React Blue */}
      </a>
      <span className="text-xl">+</span>

      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiTailwindcss
          size={30}
          title="Tailwind CSS"
          style={{ color: "#06B6D4" }}
        />
        {/* Tailwind Teal */}
      </a>
      <span className="text-xl">+</span>

      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiTypescript
          size={30}
          title="TypeScript"
          style={{ color: "#3178C6" }}
        />
        {/* TypeScript Blue */}
      </a>
      <span className="text-xl">+</span>

      <a
        href="https://platform.openai.com/docs/overview"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiOpenai size={30} title="OpenAI" style={{ color: "#0071C5" }} />
        {/* Placeholder for OpenAI color */}
      </a>
      <span className="text-xl">+</span>

      <a
        href="https://sdk.vercel.ai/docs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoVercel size={30} title="Vercel" style={{ color: "#000000" }} />
        {/* Vercel Black */}
      </a>

      <a
        href="https://sdk.vercel.ai/docs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbSdk size={30} title="SDK" style={{ color: "#F05032" }} />
        {/* Assuming SDK color as red for example, replace with actual SDK link */}
      </a>
    </div>
  );
}

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <ToolsUsed />
      <br />
      <br />
      <br />
      <div className="w-full max-w-xl h-[500px] md:h-[500px] p-4 shadow-lg rounded-lg bg-white flex flex-col">
        <ul ref={containerRef} className="space-y-3 overflow-y-auto flex-1">
          {messages.map((m, index) => (
            <li
              key={index}
              className={`flex items-center space-x-2 p-3 rounded-lg ${
                m.role === "user" ? "bg-blue-100" : "bg-gray-100"
              }`}
            >
              {m.role === "user" ? (
                <FaCircleUser
                  title="User"
                  className="text-blue-500"
                  size={30}
                />
              ) : (
                <AiFillRobot title="AI" className="text-gray-500" size={30} />
              )}
              <span className="text-gray-800 flex-1">{m.content}</span>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="mt-4 flex">
          <Input
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            placeholder="Message..."
            className="p-6 py-[2rem]"
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-gray-900 
            border transition duration-200 ease-in-out ml-4 transform p-6 py-[2rem] hover:-translate-y-1"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
