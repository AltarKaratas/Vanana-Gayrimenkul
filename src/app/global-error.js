"use client";
export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="text-white text-2xl px-6 xl:px-20 py-8 xl:py-16">
          Bir şeyler yanlış gitti...
          <a href="/" className="">
            Ana sayfaya dön
          </a>
        </div>
      </body>
    </html>
  );
}
