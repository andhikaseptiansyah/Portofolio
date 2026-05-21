import React from 'react';

export const metadata = {
  title: 'Dhika Dev - Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" style={{ scrollBehavior: 'smooth' }}>
      <head>
        {/* Menyisipkan CDN FontAwesome untuk ikon agar tetap berfungsi */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          precedence="default"
        />
      </head>
      <body>
        {/* Global reset dan variabel warna dasar dari HTML asli */}
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800;900&display=swap');

          :root {
              --bg-blue: #0A36F0;
              --dark-blue: #051B85;
              --lime: #CCFF00;
          }
          
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: 'Poppins', sans-serif;
          }

          body {
              background-color: var(--bg-blue); 
              color: white;
              overflow-x: hidden;
          }
        `}} />
        {children}
      </body>
    </html>
  );
}