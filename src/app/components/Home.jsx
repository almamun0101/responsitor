"use client";

import React, { useState } from "react";

export default function SimpleIframe() {
  const [url, setUrl] = useState("https://example.com");
  const [src, setSrc] = useState("https://example.com");

  function onKeyDown(e) {
    if (e.key === "Enter") {
      let finalUrl = url;
      if (!finalUrl.startsWith("http")) {
        finalUrl = "https://" + finalUrl;
      }
      setSrc(finalUrl);
    }
  }

  return (
    <div className="p-4">
      {/* <input
        className="w-full px-3 py-2 border rounded mb-3"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Enter website URL and press Enter"
      />

      <iframe
        src={src}
        title="simple-browser"
        style={{ width: "100%", height: "80vh", border: "1px solid #ccc" }}
      /> */}
    </div>
  );
}
