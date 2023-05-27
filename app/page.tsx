import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <div className="flex h-full min-h-screen flex-col items-center bg-[#0E1117] px-4 pb-20 text-neutral-200 sm:px-10">
        <div className="mt-10 flex flex-col items-center justify-center sm:mt-20">
          <div className="text-4xl font-bold">AI Code Translator</div>
        </div>
        <div className="mt-6 text-center text-sm">
          <input
            className="mt-1 h-[24px] w-[280px] rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="password"
            placeholder="OpenAI API Key"
          />
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <select className="h-[40px] w-[140px] rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200">
            <option value="gpt-3.5-turbo">
              GPT-3.5
            </option>
            <option value="gpt-4">GPT-4</option>
          </select>
          <button className="w-[140px] cursor-pointer rounded-md bg-violet-500 px-4 py-2 font-bold hover:bg-violet-600 active:bg-violet-700">
            Translate
          </button>
        </div>
        <div className="mt-2 text-center text-xs">
          Enter some code and click "Translate"
        </div>
        <div className="mt-6 flex w-full max-w-[1200px] flex-col justify-between sm:flex-row sm:space-x-4">
          <div className="h-100 flex flex-col justify-center space-y-2 sm:w-2/4">
            <div className="text-center text-xl font-bold">Input</div>
            <select className="w-full rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200">
              <option value="Assembly Language">Assembly Language</option>
              <option value="Bash">Bash</option>
              <option value="C">C</option>
              <option value="C#">C#</option>
              <option value="C++">C++</option>
              <option value="Clojure">Clojure</option>
              <option value="COBOL">COBOL</option>
              <option value="CoffeeScript">CoffeeScript</option>
              <option value="CSS">CSS</option>
              <option value="Dart">Dart</option>
              <option value="Elixir">Elixir</option>
              <option value="Fortran">Fortran</option>
              <option value="Go">Go</option>
              <option value="Groovy">Groovy</option>
              <option value="Haskell">Haskell</option>
              <option value="HTML">HTML</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="JSX">JSX</option>
              <option value="Julia">Julia</option>
              <option value="Kotlin">Kotlin</option>
              <option value="Lisp">Lisp</option>
              <option value="Lua">Lua</option>
              <option value="Matlab">Matlab</option>
              <option value="Natural Language">Natural Language</option>
              <option value="NoSQL">NoSQL</option>
              <option value="Objective-C">Objective-C</option>
              <option value="Pascal">Pascal</option>
              <option value="Perl">Perl</option>
              <option value="PHP">PHP</option>
              <option value="PL/SQL">PL/SQL</option>
              <option value="Powershell">Powershell</option>
              <option value="Python">Python</option>
              <option value="R">R</option>
              <option value="Racket">Racket</option>
              <option value="Ruby">Ruby</option>
              <option value="Rust">Rust</option>
              <option value="SAS">SAS</option>
              <option value="Scala">Scala</option>
              <option value="SQL">SQL</option>
              <option value="Swift">Swift</option>
              <option value="SwiftUI">SwiftUI</option>
              <option value="TSX">TSX</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Visual Basic .NET">Visual Basic .NET</option>
              <option value="Vue">Vue</option>
            </select>
            <div className="relative">
              <button className="absolute right-0 top-0 z-10 rounded bg-[#1A1B26] p-1 text-xs text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]">
                Copy
              </button>
              <textarea
                name="output"
                id=""
                cols={30}
                rows={10}
              >
              </textarea>
            </div>
          </div>
          <div className="mt-8 flex h-full flex-col justify-center space-y-2 sm:mt-0 sm:w-2/4">
            <div className="text-center text-xl font-bold">Output</div>
            <select className="w-full rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200">
              <option value="Assembly Language">Assembly Language</option>
              <option value="Bash">Bash</option>
              <option value="C">C</option>
              <option value="C#">C#</option>
              <option value="C++">C++</option>
              <option value="Clojure">Clojure</option>
              <option value="COBOL">COBOL</option>
              <option value="CoffeeScript">CoffeeScript</option>
              <option value="CSS">CSS</option>
              <option value="Dart">Dart</option>
              <option value="Elixir">Elixir</option>
              <option value="Fortran">Fortran</option>
              <option value="Go">Go</option>
              <option value="Groovy">Groovy</option>
              <option value="Haskell">Haskell</option>
              <option value="HTML">HTML</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="JSX">JSX</option>
              <option value="Julia">Julia</option>
              <option value="Kotlin">Kotlin</option>
              <option value="Lisp">Lisp</option>
              <option value="Lua">Lua</option>
              <option value="Matlab">Matlab</option>
              <option value="Natural Language">Natural Language</option>
              <option value="NoSQL">NoSQL</option>
              <option value="Objective-C">Objective-C</option>
              <option value="Pascal">Pascal</option>
              <option value="Perl">Perl</option>
              <option value="PHP">PHP</option>
              <option value="PL/SQL">PL/SQL</option>
              <option value="Powershell">Powershell</option>
              <option value="Python">Python</option>
              <option value="R">R</option>
              <option value="Racket">Racket</option>
              <option value="Ruby">Ruby</option>
              <option value="Rust">Rust</option>
              <option value="SAS">SAS</option>
              <option value="Scala">Scala</option>
              <option value="SQL">SQL</option>
              <option value="Swift">Swift</option>
              <option value="SwiftUI">SwiftUI</option>
              <option value="TSX">TSX</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Visual Basic .NET">Visual Basic .NET</option>
              <option value="Vue">Vue</option>
            </select>
            <div className="relative">
              <button className="absolute right-0 top-0 z-10 rounded bg-[#1A1B26] p-1 text-xs text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]">
                Copy
              </button>
              <textarea
                name="output"
                id=""
                cols={30}
                rows={10}
              >
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
