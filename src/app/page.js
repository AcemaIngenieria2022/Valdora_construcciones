"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000', // Negro absoluto para ocultar el fondo del logo
      padding: '20px',
      overflow: 'hidden'
    }}>
      
      {/* Contenedor del Logo */}
      <div style={{
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '500px',
      }}>
        <Image 
          src="/imagenes/valdora-logo.jpeg"
          alt="VALDORA CONSTRUCCIONES"
          width={500}
          height={250}
          priority
          style={{
            objectFit: 'contain',
            // El filtro mejora el contraste del dorado sobre el negro
            filter: 'contrast(1.1) brightness(1.1)' 
          }}
        />
      </div>
      
      {/* Línea decorativa minimalista en dorado */}
      <div style={{
        width: '60px',
        height: '2px',
        backgroundColor: '#c5a059', 
        margin: '0 auto 40px auto',
        borderRadius: '2px',
        boxShadow: '0px 0px 10px rgba(197, 160, 89, 0.3)'
      }} />
      
      {/* Sección de Texto */}
      <div style={{
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: 'clamp(32px, 10vw, 68px)', 
          color: '#c5a059', 
          fontFamily: 'serif', 
          fontWeight: '300',
          margin: '0',
          letterSpacing: '8px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          ¡Bienvenido!
        </h1>
        
        <p style={{
          fontSize: 'clamp(14px, 4vw, 18px)',
          color: '#a0a0a0', 
          fontFamily: 'Arial, sans-serif',
          marginTop: '20px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          fontWeight: '300',
          opacity: 0.9
        }}>
          Sitio en construcción
        </p>
      </div>

      {/* Estilo Global para asegurar que no haya bordes blancos en el body */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #000000 !important;
        }
      `}</style>
    </main>
  );
}