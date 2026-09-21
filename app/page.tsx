import Image from "next/image";
import Link from "next/link";
import konten from "../design-reference/konten.json";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "var(--paper)",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "#FFFFFF",
            borderBottom: "1px solid var(--line)",
            position: "sticky",
            top: "0",
            zIndex: "40",
          }}
        >
          <div
            className="wrap hdr"
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "16px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <a
              href="#beranda"
              aria-label="Al Farizki &amp; Zhafir Law Firm — Beranda"
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <img
                src="/images/logo.png"
                alt="Logo Al Farizki &amp; Zhafir Law Firm"
                style={{ height: "74px", width: "auto", display: "block" }}
              />
            </a>
            <nav
              className="nav-utama"
              aria-label="Navigasi utama"
              style={{ display: "flex", alignItems: "center", gap: "34px" }}
            >
              <a
                href="#beranda"
                className="nav-link"
                style={{
                  fontSize: "13.5px",
                  fontWeight: "600",
                  letterSpacing: "0.4px",
                  color: "var(--navy-900)",
                  textTransform: "uppercase",
                }}
              >
                Beranda
              </a>

              <a
                href="#tentang"
                className="nav-link"
                style={{
                  fontSize: "13.5px",
                  fontWeight: "600",
                  letterSpacing: "0.4px",
                  color: "var(--navy-900)",
                  textTransform: "uppercase",
                }}
              >
                Tentang Kami
              </a>

              <a
                href="#tim"
                className="nav-link"
                style={{
                  fontSize: "13.5px",
                  fontWeight: "600",
                  letterSpacing: "0.4px",
                  color: "var(--navy-900)",
                  textTransform: "uppercase",
                }}
              >
                Tim Kami
              </a>

              <a
                href="#layanan"
                className="nav-link"
                style={{
                  fontSize: "13.5px",
                  fontWeight: "600",
                  letterSpacing: "0.4px",
                  color: "var(--navy-900)",
                  textTransform: "uppercase",
                }}
              >
                Layanan
              </a>

              <a
                href="#berita"
                className="nav-link"
                style={{
                  fontSize: "13.5px",
                  fontWeight: "600",
                  letterSpacing: "0.4px",
                  color: "var(--navy-900)",
                  textTransform: "uppercase",
                }}
              >
                Berita
              </a>
            </nav>
            <div
              className="hdr-kanan"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <details className="menu-hp">
                <summary
                  aria-label="Buka menu navigasi"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid var(--line)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--navy-900)",
                    background: "#FFFFFF",
                  }}
                >
                  <svg
                    className="ik-buka"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16"></path>
                  </svg>
                  <svg
                    className="ik-tutup"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12M18 6 6 18"></path>
                  </svg>
                </summary>
                <nav
                  aria-label="Navigasi utama (HP)"
                  className="menu-hp-isi"
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "100%",
                    background: "#FFFFFF",
                    borderTop: "1px solid var(--line)",
                    borderBottom: "3px solid #B08D4F",
                    boxShadow: "0 18px 30px -18px rgba(10,28,54,0.35)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <a
                    href="#beranda"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "15px 18px",
                      borderBottom: "1px solid var(--line)",
                      fontSize: "12.5px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "var(--navy-900)",
                    }}
                  >
                    Beranda
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B08D4F"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </a>

                  <a
                    href="#tentang"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "15px 18px",
                      borderBottom: "1px solid var(--line)",
                      fontSize: "12.5px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "var(--navy-900)",
                    }}
                  >
                    Tentang Kami
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B08D4F"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </a>

                  <a
                    href="#tim"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "15px 18px",
                      borderBottom: "1px solid var(--line)",
                      fontSize: "12.5px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "var(--navy-900)",
                    }}
                  >
                    Tim Kami
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B08D4F"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </a>

                  <a
                    href="#layanan"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "15px 18px",
                      borderBottom: "1px solid var(--line)",
                      fontSize: "12.5px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "var(--navy-900)",
                    }}
                  >
                    Layanan
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B08D4F"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </a>

                  <a
                    href="#berita"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "15px 18px",
                      borderBottom: "1px solid var(--line)",
                      fontSize: "12.5px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "var(--navy-900)",
                    }}
                  >
                    Berita
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B08D4F"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </a>
                </nav>
              </details>
            </div>
          </div>
        </div>

        <div
          className="sec"
          id="beranda"
          style={{
            width: "100%",
            position: "relative",
            background:
              "linear-gradient(180deg, var(--navy-950) 0%, var(--navy-900) 60%, var(--navy-800) 100%)",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/hero-latar.jpg"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-4%",
              top: "0",
              height: "100%",
              width: "58%",
              objectFit: "cover",
              opacity: "0.4",
              mixBlendMode: "luminosity",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "0",
              background:
                "linear-gradient(100deg, var(--navy-950) 32%, rgba(15,37,69,0.7) 62%, rgba(15,37,69,0.2) 100%)",
            }}
          ></div>
          <img
            src="/images/motif-kincir.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-60px",
              bottom: "-40px",
              width: "280px",
              opacity: "0.22",
              transform: "rotate(8deg)",
            }}
          />
          <div
            className="wrap hero-inner"
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "110px 40px 120px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "64px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "1 1 560px",
                maxWidth: "660px",
                minWidth: "320px",
              }}
            >
              <div
                className="rise-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "22px",
                }}
              >
                <span
                  style={{
                    width: "34px",
                    height: "1.5px",
                    background: "#B08D4F",
                    display: "inline-block",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "12.5px",
                    letterSpacing: "2.5px",
                    color: "#B08D4F",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  Al Farizki &amp; Zhafir Law Firm
                </span>
              </div>
              <h1
                className="rise-2"
                style={{
                  fontSize: "52px",
                  lineHeight: "1.12",
                  color: "#FFFFFF",
                  fontWeight: "800",
                  marginBottom: "26px",
                }}
              >
                Ketahui Hukum,
                <br />
                Hindari Sengketa
              </h1>
              <p
                className="rise-3"
                style={{
                  fontSize: "16.5px",
                  lineHeight: "1.75",
                  color: "#C9D3E0",
                  maxWidth: "520px",
                  marginBottom: "34px",
                }}
              >
                Kami percaya bahwa pemahaman hukum yang tepat adalah langkah
                awal untuk mencegah konflik dan melindungi kepentingan Anda.
                Sebagai mitra strategis, kami mendampingi Anda mulai dari
                konsultasi, penyusunan kontrak, hingga penyelesaian sengketa —
                dengan pendekatan preventif, profesional, dan berintegritas.
              </p>
              <div
                className="rise-4"
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginBottom: "30px",
                }}
              >
                <a
                  href="https://wa.me/6285941862969?text=Halo%20Al%20Farizki%20%26%20Zhafir%20Law%20Firm%2C%20saya%20ingin%20berkonsultasi%20mengenai%20masalah%20hukum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift btn-wa"
                  style={{
                    background: "#B08D4F",
                    color: "var(--navy-950)",
                    fontWeight: "700",
                    fontSize: "14px",
                    padding: "15px 28px",
                    borderRadius: "2px",
                    letterSpacing: "0.3px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <svg
                    className="ic-wa"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  Konsultasi via WhatsApp
                </a>
                <a
                  href="#layanan"
                  className="btn-lift"
                  style={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    color: "#FFFFFF",
                    fontWeight: "600",
                    fontSize: "14px",
                    padding: "15px 30px",
                    borderRadius: "2px",
                    letterSpacing: "0.3px",
                  }}
                >
                  Lihat Layanan Kami
                </a>
              </div>
              <p
                style={{
                  fontSize: "12.5px",
                  color: "#7F91AA",
                  letterSpacing: "0.3px",
                }}
              >
                Berkantor di Malang — melayani klien di seluruh Indonesia
              </p>
            </div>
          </div>

          <div
            className="wrap"
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "0 40px 0",
              position: "relative",
            }}
          >
            <div
              className="stats"
              style={{
                background: "var(--navy-900)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "3px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "26px 30px",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "30px",
                    color: "#B08D4F",
                    fontWeight: "700",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    fontSize: "12.5px",
                    color: "#B7C3D6",
                    marginTop: "4px",
                  }}
                >
                  Founding Partner &amp; Tim Legal
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "26px 30px",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "30px",
                    color: "#B08D4F",
                    fontWeight: "700",
                  }}
                >
                  8+
                </div>
                <div
                  style={{
                    fontSize: "12.5px",
                    color: "#B7C3D6",
                    marginTop: "4px",
                  }}
                >
                  Sektor Industri Strategis
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "26px 30px",
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "30px",
                    color: "#B08D4F",
                    fontWeight: "700",
                  }}
                >
                  Malang
                </div>
                <div
                  style={{
                    fontSize: "12.5px",
                    color: "#B7C3D6",
                    marginTop: "4px",
                  }}
                >
                  Basis Kantor, Layanan Nasional
                </div>
              </div>
              <div style={{ flex: "1 1 200px", padding: "26px 30px" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "30px",
                    color: "#B08D4F",
                    fontWeight: "700",
                  }}
                >
                  Luar Pengadilan
                </div>
                <div
                  style={{
                    fontSize: "12.5px",
                    color: "#B7C3D6",
                    marginTop: "4px",
                  }}
                >
                  Pendekatan Penyelesaian yang Diutamakan
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "70px" }}></div>
        </div>

        <div
          className="sec"
          id="tentang"
          style={{
            width: "100%",
            background: "var(--navy-950)",
            padding: "100px 0 150px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/motif-kincir.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-30px",
              top: "-40px",
              width: "320px",
              opacity: "0.5",
            }}
          />
          <div
            className="wrap row-2"
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "0 40px",
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
              gap: "50px",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative", minWidth: "0" }}>
              <img
                src="/images/founder-berdua.jpg"
                className="foto-duo"
                alt="Zhafir Galang Arissaputra, S.H. dan Gilang Al Farizki Harman, S.H. — Founding Partner"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  boxShadow: "0 30px 60px -25px rgba(0,0,0,0.65)",
                }}
              />

              <div
                className="plat plat-kanan"
                style={{
                  position: "absolute",
                  right: "-18px",
                  top: "55%",
                  width: "auto",
                  whiteSpace: "nowrap",
                  background: "var(--navy-800)",
                  padding: "8px 13px",
                  borderLeft: "3px solid #B08D4F",
                  boxShadow: "0 16px 30px -14px rgba(0,0,0,0.6)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "12.5px",
                    color: "#FFFFFF",
                    fontWeight: "700",
                    lineHeight: "1.3",
                  }}
                >
                  Gilang Al Farizki Harman, S.H.
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#B08D4F",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginTop: "3px",
                    fontWeight: "600",
                  }}
                >
                  Founding Partner
                </div>
              </div>

              <div
                className="plat plat-kiri"
                style={{
                  position: "absolute",
                  left: "-18px",
                  top: "73%",
                  width: "auto",
                  whiteSpace: "nowrap",
                  background: "var(--navy-800)",
                  padding: "8px 13px",
                  borderLeft: "3px solid #B08D4F",
                  boxShadow: "0 16px 30px -14px rgba(0,0,0,0.6)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "12.5px",
                    color: "#FFFFFF",
                    fontWeight: "700",
                    lineHeight: "1.3",
                  }}
                >
                  Zhafir Galang Arissaputra, S.H.
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#B08D4F",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginTop: "3px",
                    fontWeight: "600",
                  }}
                >
                  Founding Partner
                </div>
              </div>
            </div>

            <div className="teks-tentang" style={{ minWidth: "0" }}>
              <span
                className="eyebrow"
                style={{
                  fontSize: "12.5px",
                  letterSpacing: "2.5px",
                  color: "#B08D4F",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  display: "block",
                }}
              >
                Tentang Kami
              </span>
              <h2
                className="t-judul"
                style={{
                  fontSize: "33px",
                  color: "#FFFFFF",
                  fontWeight: "800",
                  margin: "14px 0 22px",
                  lineHeight: "1.3",
                  letterSpacing: "-0.2px",
                  maxWidth: "19ch",
                }}
              >
                Firma Hukum Berbasis di Malang, Melayani Seluruh Indonesia
              </h2>
              <div
                style={{
                  borderLeft: "3px solid #B08D4F",
                  paddingLeft: "20px",
                  marginBottom: "22px",
                }}
              >
                <p
                  className="t-kutip"
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontStyle: "italic",
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "var(--gold-light)",
                    margin: "0",
                    maxWidth: "34ch",
                  }}
                >
                  “Cara kami menyelesaikan sengketa lebih mengutamakan
                  penyelesaian di luar pengadilan karena lebih cepat, sederhana,
                  dan dapat diterima oleh para pihak.”
                </p>
              </div>
              <p
                className="t-isi"
                style={{
                  fontSize: "14.5px",
                  lineHeight: "1.9",
                  color: "#C3CEDD",
                  margin: "0 0 14px",
                  maxWidth: "46ch",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  hyphens: "auto",
                }}
              >
                Al Farizki &amp; Zhafir Law Firm dikenal atas keunggulan di
                bidang litigasi dan penyelesaian sengketa, serta menyediakan
                layanan hukum menyeluruh di berbagai sektor strategis.
              </p>
              <p
                className="t-isi"
                style={{
                  fontSize: "14.5px",
                  lineHeight: "1.9",
                  color: "#C3CEDD",
                  margin: "0",
                  maxWidth: "46ch",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  hyphens: "auto",
                }}
              >
                Didirikan oleh dua profesional muda, firma ini berkembang dari
                praktik terbatas menjadi firma mapan yang menangani klien
                individual maupun korporasi &mdash; dengan komitmen menjadi
                mitra hukum jangka panjang yang terpercaya.
              </p>
            </div>
          </div>

          <div
            className="wrap"
            style={{
              maxWidth: "1180px",
              margin: "70px auto 0",
              padding: "0 40px",
              position: "relative",
              zIndex: "2",
            }}
          >
            <div
              className="panel-fokus"
              style={{
                background: "var(--paper)",
                borderRadius: "22px",
                boxShadow: "0 40px 70px -30px rgba(0,0,0,0.5)",
                padding: "44px 48px",
              }}
            >
              <div style={{ marginBottom: "22px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "2.5px",
                    color: "#B08D4F",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  Fokus Kami
                </span>
                <h3
                  style={{
                    fontSize: "23px",
                    color: "var(--navy-950)",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  Bisnis <span className="amp">&amp;</span> Korporasi
                </h3>
              </div>
              <div
                className="grid-3"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid #B08D4F",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    minHeight: "78px",
                  }}
                >
                  <img
                    src="/images/ikon/perusahaan.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      flex: "0 0 46px",
                      width: "46px",
                      height: "46px",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.35",
                      color: "var(--navy-900)",
                      fontWeight: "600",
                    }}
                  >
                    Hukum Perusahaan
                  </span>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid #B08D4F",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    minHeight: "78px",
                  }}
                >
                  <img
                    src="/images/ikon/pertanahan.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      flex: "0 0 46px",
                      width: "46px",
                      height: "46px",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.35",
                      color: "var(--navy-900)",
                      fontWeight: "600",
                    }}
                  >
                    Hukum Pertanahan
                  </span>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid #B08D4F",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    minHeight: "78px",
                  }}
                >
                  <img
                    src="/images/ikon/ketenagakerjaan.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      flex: "0 0 46px",
                      width: "46px",
                      height: "46px",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.35",
                      color: "var(--navy-900)",
                      fontWeight: "600",
                    }}
                  >
                    Hukum Ketenagakerjaan
                  </span>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid #B08D4F",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    minHeight: "78px",
                  }}
                >
                  <img
                    src="/images/ikon/perizinan.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      flex: "0 0 46px",
                      width: "46px",
                      height: "46px",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.35",
                      color: "var(--navy-900)",
                      fontWeight: "600",
                    }}
                  >
                    Hukum Perizinan
                  </span>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid #B08D4F",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    minHeight: "78px",
                  }}
                >
                  <img
                    src="/images/ikon/persaingan-usaha-konsumen.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      flex: "0 0 46px",
                      width: "46px",
                      height: "46px",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.35",
                      color: "var(--navy-900)",
                      fontWeight: "600",
                    }}
                  >
                    Hukum Persaingan Usaha &amp; Konsumen
                  </span>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid #B08D4F",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    minHeight: "78px",
                  }}
                >
                  <img
                    src="/images/ikon/perbankan.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      flex: "0 0 46px",
                      width: "46px",
                      height: "46px",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.35",
                      color: "var(--navy-900)",
                      fontWeight: "600",
                    }}
                  >
                    Hukum Perbankan
                  </span>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid #B08D4F",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    minHeight: "78px",
                  }}
                >
                  <img
                    src="/images/ikon/pertambangan.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      flex: "0 0 46px",
                      width: "46px",
                      height: "46px",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.35",
                      color: "var(--navy-900)",
                      fontWeight: "600",
                    }}
                  >
                    Hukum Pertambangan
                  </span>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid #B08D4F",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    minHeight: "78px",
                  }}
                >
                  <img
                    src="/images/ikon/kepailitan.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      flex: "0 0 46px",
                      width: "46px",
                      height: "46px",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.35",
                      color: "var(--navy-900)",
                      fontWeight: "600",
                    }}
                  >
                    Hukum Kepailitan
                  </span>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid #B08D4F",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    minHeight: "78px",
                  }}
                >
                  <img
                    src="/images/ikon/medis-kesehatan.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      flex: "0 0 46px",
                      width: "46px",
                      height: "46px",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.35",
                      color: "var(--navy-900)",
                      fontWeight: "600",
                    }}
                  >
                    Hukum Medis &amp; Kesehatan
                  </span>
                </div>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid #B08D4F",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    minHeight: "78px",
                  }}
                >
                  <img
                    src="/images/ikon/real-estat.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      flex: "0 0 46px",
                      width: "46px",
                      height: "46px",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.35",
                      color: "var(--navy-900)",
                      fontWeight: "600",
                    }}
                  >
                    Hukum Real Estat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="sec"
          id="komitmen"
          style={{
            width: "100%",
            background: "var(--paper)",
            padding: "100px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/motif-kincir.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-70px",
              bottom: "-50px",
              width: "300px",
              opacity: "0.14",
              transform: "rotate(-14deg)",
            }}
          />
          <div
            className="wrap"
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "0 40px",
              position: "relative",
            }}
          >
            <div
              style={{
                maxWidth: "620px",
                margin: "0 auto 54px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  letterSpacing: "2.5px",
                  color: "#B08D4F",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Komitmen Kami
              </span>
              <h2
                style={{
                  fontSize: "34px",
                  color: "var(--navy-950)",
                  fontWeight: "800",
                  margin: "14px 0 16px",
                }}
              >
                Dua Prinsip yang Kami Pegang
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.75",
                  color: "var(--ink-soft)",
                }}
              >
                Landasan kerja kami dalam mendampingi setiap klien, dari perkara
                personal hingga keputusan strategis perusahaan.
              </p>
            </div>

            <div
              className="grid-2"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
                gap: "28px",
              }}
            >
              <div
                className="card-lift"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  borderLeft: "4px solid #B08D4F",
                  padding: "34px 36px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "40px",
                      fontWeight: "700",
                      color: "var(--navy-100)",
                      lineHeight: "1",
                    }}
                  >
                    01
                  </span>
                  <h3
                    style={{
                      fontSize: "26px",
                      color: "var(--navy-950)",
                      fontWeight: "700",
                      letterSpacing: "0.5px",
                    }}
                  >
                    KREDIBEL
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "15.5px",
                    lineHeight: "1.85",
                    color: "var(--ink-soft)",
                  }}
                >
                  Sejak berdiri, firma kami menjunjung tinggi kepercayaan dan
                  kepentingan klien sebagai prinsip utama. Reputasi kami
                  dibangun atas dasar kredibilitas dan komitmen dalam menangani
                  berbagai kasus kompleks secara profesional. Didukung oleh
                  pengalaman dan dedikasi tinggi, kami berkomitmen untuk terus
                  memberikan solusi hukum yang terpercaya dan berorientasi pada
                  hasil.
                </p>
              </div>

              <div
                className="card-lift"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  borderLeft: "4px solid #B08D4F",
                  padding: "34px 36px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "40px",
                      fontWeight: "700",
                      color: "var(--navy-100)",
                      lineHeight: "1",
                    }}
                  >
                    02
                  </span>
                  <h3
                    style={{
                      fontSize: "26px",
                      color: "var(--navy-950)",
                      fontWeight: "700",
                      letterSpacing: "0.5px",
                    }}
                  >
                    AKUNTABEL
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "15.5px",
                    lineHeight: "1.85",
                    color: "var(--ink-soft)",
                  }}
                >
                  Kami berkomitmen membantu setiap keputusan bisnis Anda menjadi
                  lebih aman dan terukur melalui layanan hukum yang transparan
                  dan andal. Dengan integritas dan akuntabilitas sebagai
                  landasan, tim berpengalaman kami siap mendampingi Anda dalam
                  memahami aspek hukum secara menyeluruh, meminimalkan risiko,
                  dan mendukung langkah strategis perusahaan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="sec"
          id="layanan"
          style={{
            width: "100%",
            background: "var(--paper-alt)",
            padding: "100px 0",
          }}
        >
          <div
            className="wrap"
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "0 40px",
              position: "relative",
            }}
          >
            <div
              style={{
                maxWidth: "620px",
                margin: "0 auto 56px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12.5px",
                  letterSpacing: "2.5px",
                  color: "#B08D4F",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Layanan
              </span>
              <h2
                style={{
                  fontSize: "34px",
                  color: "var(--navy-950)",
                  fontWeight: "800",
                  margin: "14px 0 16px",
                }}
              >
                Ruang Lingkup Jasa Kami
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.75",
                  color: "var(--ink-soft)",
                }}
              >
                Pendampingan hukum menyeluruh, dari konsultasi awal hingga
                penyelesaian di meja perundingan maupun pengadilan.
              </p>
            </div>

            <div
              className="grid-3 grid-layanan"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: "26px",
              }}
            >
              <div
                className="card-lift"
                style={{
                  background: "#FFFFFF",
                  padding: "34px 28px",
                  borderTop: "3px solid #B08D4F",
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#173B6C"
                  strokeWidth="1.6"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <h3
                  style={{
                    fontSize: "18px",
                    color: "var(--navy-950)",
                    fontWeight: "700",
                    margin: "20px 0 10px",
                  }}
                >
                  Konsultasi Hukum
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "var(--ink-soft)",
                  }}
                >
                  Pendampingan awal untuk memahami posisi hukum Anda sebelum
                  mengambil langkah lebih lanjut.
                </p>
              </div>

              <div
                className="card-lift"
                style={{
                  background: "#FFFFFF",
                  padding: "34px 28px",
                  borderTop: "3px solid #B08D4F",
                  position: "relative",
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#173B6C"
                  strokeWidth="1.6"
                >
                  <circle cx="10.5" cy="10.5" r="6.5"></circle>
                  <path d="m20 20-4.35-4.35"></path>
                  <path d="M8 10.5h5M10.5 8v5"></path>
                </svg>
                <h3
                  style={{
                    fontSize: "18px",
                    color: "var(--navy-950)",
                    fontWeight: "700",
                    margin: "20px 0 10px",
                    position: "relative",
                  }}
                >
                  Legal Audit <span className="amp">&amp;</span> Due Diligence
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "var(--ink-soft)",
                  }}
                >
                  Legal opinion, legal audit, legal review &amp; legal due
                  diligence yang menyeluruh &amp; akurat.
                </p>
              </div>

              <div
                className="card-lift"
                style={{
                  background: "#FFFFFF",
                  padding: "34px 28px",
                  borderTop: "3px solid #B08D4F",
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#173B6C"
                  strokeWidth="1.6"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                </svg>
                <h3
                  style={{
                    fontSize: "18px",
                    color: "var(--navy-950)",
                    fontWeight: "700",
                    margin: "20px 0 10px",
                    position: "relative",
                  }}
                >
                  Drafting Dokumen <span className="amp">&amp;</span> Kontrak
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "var(--ink-soft)",
                  }}
                >
                  Preview, review &amp; drafting dokumen, perjanjian &amp;
                  kontrak yang melindungi kepentingan Anda.
                </p>
              </div>

              <div
                className="card-lift"
                style={{
                  background: "#FFFFFF",
                  padding: "34px 28px",
                  borderTop: "3px solid #B08D4F",
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#173B6C"
                  strokeWidth="1.6"
                >
                  <path d="M11 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                  <path d="m14 9 3 3-3 3"></path>
                  <path d="M22 12h-9"></path>
                </svg>
                <h3
                  style={{
                    fontSize: "18px",
                    color: "var(--navy-950)",
                    fontWeight: "700",
                    margin: "20px 0 10px",
                    position: "relative",
                  }}
                >
                  Negosiasi, Mediasi <span className="amp">&amp;</span>{" "}
                  Konsiliasi
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "var(--ink-soft)",
                  }}
                >
                  Mengutamakan penyelesaian di luar pengadilan yang lebih cepat,
                  sederhana &amp; diterima para pihak.
                </p>
              </div>

              <div
                className="card-lift"
                style={{
                  background: "#FFFFFF",
                  padding: "34px 28px",
                  borderTop: "3px solid #B08D4F",
                  position: "relative",
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#173B6C"
                  strokeWidth="1.6"
                >
                  <path d="M14 4h6v6"></path>
                  <path d="m10 14 10-10"></path>
                  <path d="M4 12v8h8"></path>
                  <path d="M4 20 9 15"></path>
                </svg>
                <h3
                  style={{
                    fontSize: "18px",
                    color: "var(--navy-950)",
                    fontWeight: "700",
                    margin: "20px 0 10px",
                    position: "relative",
                  }}
                >
                  Pengadilan <span className="amp">&amp;</span> Arbitrase
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "var(--ink-soft)",
                  }}
                >
                  Pendampingan litigasi yang gigih, analitis &amp; berpusat pada
                  kebutuhan klien di setiap tingkat.
                </p>
              </div>

              <div
                className="card-lift"
                style={{
                  background: "#FFFFFF",
                  padding: "34px 28px",
                  borderTop: "3px solid #B08D4F",
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#173B6C"
                  strokeWidth="1.6"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <h3
                  style={{
                    fontSize: "18px",
                    color: "var(--navy-950)",
                    fontWeight: "700",
                    margin: "20px 0 10px",
                  }}
                >
                  Jasa Pelayanan Administratif
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "var(--ink-soft)",
                  }}
                >
                  Dukungan administratif &amp; perizinan agar operasional hukum
                  Anda berjalan lancar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "100%", position: "relative" }}>
          <img
            src="/images/tim-bersama.jpg"
            alt="Tim Al Farizki &amp; Zhafir Law Firm berdiskusi bersama klien"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "0",
              background:
                "linear-gradient(90deg, rgba(10,28,54,0.88) 0%, rgba(10,28,54,0.45) 55%, rgba(10,28,54,0.15) 100%)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              inset: "0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              className="wrap"
              style={{
                maxWidth: "1180px",
                margin: "0 auto",
                padding: "0 40px",
                width: "100%",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontStyle: "italic",
                  color: "#FFFFFF",
                  fontSize: "24px",
                  maxWidth: "480px",
                  lineHeight: "1.5",
                }}
              >
                “Tim yang solid, untuk solusi hukum yang kuat.”
              </p>
            </div>
          </div>
        </div>

        <div
          className="sec"
          id="tim"
          style={{
            width: "100%",
            background: "var(--paper)",
            padding: "100px 0",
          }}
        >
          <div
            className="wrap"
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "0 40px",
              position: "relative",
            }}
          >
            <div
              style={{
                maxWidth: "620px",
                margin: "0 auto 56px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12.5px",
                  letterSpacing: "2.5px",
                  color: "#B08D4F",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Tim Kami
              </span>
              <h2
                style={{
                  fontSize: "34px",
                  color: "var(--navy-950)",
                  fontWeight: "800",
                  margin: "14px 0 16px",
                }}
              >
                Profesional di Balik Setiap Solusi
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.75",
                  color: "var(--ink-soft)",
                }}
              >
                Didukung oleh tim litigasi, penasihat hukum, dan konsultan
                profesional yang siap mendampingi Anda secara strategis. Klik
                foto untuk melihat profil singkatnya.
              </p>
            </div>

            <div
              className="grid-tim"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(430px,1fr))",
                gap: "30px",
                alignItems: "start",
              }}
            >
              <details
                name="tim"
                className="orang card-lift"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    cursor: "pointer",
                  }}
                >
                  <div className="photo-frame" style={{ flex: "0 0 240px" }}>
                    <img
                      src="/images/tim/gilang.jpg"
                      alt="Gilang Al Farizki Harman, S.H."
                      style={{
                        width: "240px",
                        height: "320px",
                        objectFit: "cover",
                        objectPosition: "center 18%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flex: "1",
                      padding: "26px 24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "19px",
                        fontWeight: "700",
                        color: "var(--navy-950)",
                        lineHeight: "1.3",
                      }}
                    >
                      Gilang Al Farizki Harman, S.H.
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11.5px",
                        color: "#B08D4F",
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                      }}
                    >
                      Partner
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "9px",
                        marginTop: "8px",
                      }}
                    >
                      <span
                        className="chev"
                        style={{
                          flex: "0 0 30px",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          border: "1px solid var(--line)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--navy-800)"
                          strokeWidth="2"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </span>
                      <span
                        className="hint-tutup"
                        style={{
                          fontSize: "12px",
                          color: "var(--ink-soft)",
                          fontWeight: "600",
                        }}
                      >
                        Lihat profil
                      </span>
                      <span
                        className="hint-buka"
                        style={{
                          fontSize: "12px",
                          color: "var(--ink-soft)",
                          fontWeight: "600",
                        }}
                      >
                        Tutup profil
                      </span>
                    </span>
                  </div>
                </summary>
                <div style={{ padding: "0 26px 26px" }}>
                  <div
                    style={{
                      height: "1px",
                      background: "var(--line)",
                      marginBottom: "18px",
                    }}
                  ></div>
                  <p
                    className="t-bio"
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.85",
                      color: "var(--ink-soft)",
                      margin: "0",
                      textAlign: "justify",
                      textJustify: "inter-word",
                      hyphens: "auto",
                    }}
                  >
                    Sebagai Founder Al Farizki &amp; Zhafir Law Firm, Gilang
                    memiliki pengalaman luas di bidang litigasi dan bantuan
                    hukum. Ia meraih gelar Sarjana Hukum dari Universitas
                    Brawijaya dengan fokus kuat pada hukum pidana. Perjalanan
                    profesionalnya mencakup peran sebagai Kepala Divisi di YLBHI
                    LBH Pos Malang (2022–2023) serta berpraktik di salah satu
                    firma hukum terkemuka di Malang pada 2023–2025, menangani
                    perkara kompleks di bidang litigasi komersial, perselisihan
                    hubungan industrial, dan hukum pidana. Dengan pola pikir
                    yang gigih, analitis, dan berorientasi penuh pada
                    kepentingan klien, Gilang siap menghadirkan solusi hukum
                    yang efektif dan berdampak.
                  </p>
                </div>
              </details>

              <details
                name="tim"
                className="orang card-lift"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    cursor: "pointer",
                  }}
                >
                  <div className="photo-frame" style={{ flex: "0 0 240px" }}>
                    <img
                      src="/images/tim/zhafir.jpg"
                      alt="Zhafir Galang Arissaputra, S.H."
                      style={{
                        width: "240px",
                        height: "320px",
                        objectFit: "cover",
                        objectPosition: "center 18%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flex: "1",
                      padding: "26px 24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "19px",
                        fontWeight: "700",
                        color: "var(--navy-950)",
                        lineHeight: "1.3",
                      }}
                    >
                      Zhafir Galang Arissaputra, S.H.
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11.5px",
                        color: "#B08D4F",
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                      }}
                    >
                      Partner
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "9px",
                        marginTop: "8px",
                      }}
                    >
                      <span
                        className="chev"
                        style={{
                          flex: "0 0 30px",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          border: "1px solid var(--line)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--navy-800)"
                          strokeWidth="2"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </span>
                      <span
                        className="hint-tutup"
                        style={{
                          fontSize: "12px",
                          color: "var(--ink-soft)",
                          fontWeight: "600",
                        }}
                      >
                        Lihat profil
                      </span>
                      <span
                        className="hint-buka"
                        style={{
                          fontSize: "12px",
                          color: "var(--ink-soft)",
                          fontWeight: "600",
                        }}
                      >
                        Tutup profil
                      </span>
                    </span>
                  </div>
                </summary>
                <div style={{ padding: "0 26px 26px" }}>
                  <div
                    style={{
                      height: "1px",
                      background: "var(--line)",
                      marginBottom: "18px",
                    }}
                  ></div>
                  <p
                    className="t-bio"
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.85",
                      color: "var(--ink-soft)",
                      margin: "0",
                      textAlign: "justify",
                      textJustify: "inter-word",
                      hyphens: "auto",
                    }}
                  >
                    Zhafir adalah Founder Al Farizki &amp; Zhafir Law Firm,
                    lulusan Fakultas Hukum Universitas Brawijaya dengan
                    spesialisasi Hukum Pidana dan Hukum Perdata Bisnis. Ia
                    memiliki pengalaman luas di organisasi bantuan hukum dan
                    firma hukum ternama, termasuk YLBHI LBH Pos Malang
                    (2022–2023) dan sebuah firma hukum terkemuka di Kota Malang
                    (2023–2025). Keahliannya mencakup pembelaan perkara pidana,
                    asuransi, hukum perusahaan, ketenagakerjaan, hingga hak
                    asasi manusia. Dengan pendekatan yang strategis dan berpusat
                    pada klien, Zhafir berkomitmen menghadirkan solusi hukum
                    yang kuat dan berintegritas.
                  </p>
                </div>
              </details>

              <details
                name="tim"
                className="orang card-lift"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    cursor: "pointer",
                  }}
                >
                  <div className="photo-frame" style={{ flex: "0 0 240px" }}>
                    <img
                      src="/images/tim/arimbi.jpg"
                      alt="Arimbi Gita Pramudya Wardani, S.H."
                      style={{
                        width: "240px",
                        height: "320px",
                        objectFit: "cover",
                        objectPosition: "center 18%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flex: "1",
                      padding: "26px 24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "19px",
                        fontWeight: "700",
                        color: "var(--navy-950)",
                        lineHeight: "1.3",
                      }}
                    >
                      Arimbi Gita Pramudya Wardani, S.H.
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11.5px",
                        color: "#B08D4F",
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                      }}
                    >
                      Associate
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "9px",
                        marginTop: "8px",
                      }}
                    >
                      <span
                        className="chev"
                        style={{
                          flex: "0 0 30px",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          border: "1px solid var(--line)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--navy-800)"
                          strokeWidth="2"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </span>
                      <span
                        className="hint-tutup"
                        style={{
                          fontSize: "12px",
                          color: "var(--ink-soft)",
                          fontWeight: "600",
                        }}
                      >
                        Lihat profil
                      </span>
                      <span
                        className="hint-buka"
                        style={{
                          fontSize: "12px",
                          color: "var(--ink-soft)",
                          fontWeight: "600",
                        }}
                      >
                        Tutup profil
                      </span>
                    </span>
                  </div>
                </summary>
                <div style={{ padding: "0 26px 26px" }}>
                  <div
                    style={{
                      height: "1px",
                      background: "var(--line)",
                      marginBottom: "18px",
                    }}
                  ></div>
                  <p
                    className="t-bio"
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.85",
                      color: "var(--ink-soft)",
                      margin: "0",
                      textAlign: "justify",
                      textJustify: "inter-word",
                      hyphens: "auto",
                    }}
                  >
                    Arimbi adalah Associate di Al Farizki &amp; Zhafir Law Firm,
                    lulusan Fakultas Hukum Universitas Muhammadiyah Malang.
                    Praktiknya berfokus pada hukum pidana, hukum perdata, dan
                    hukum perusahaan, didukung pengalaman profesional di
                    berbagai firma hukum di Malang, Jawa Timur, serta kantor
                    notaris di Badung, Bali. Dengan keahlian yang mencakup hukum
                    pidana, hukum perusahaan, dan perizinan usaha, Arimbi
                    mengedepankan pendekatan yang strategis, analitis, dan
                    berorientasi solusi pada setiap perkara. Menjunjung standar
                    profesionalisme tertinggi dan kepentingan klien, ia
                    berkomitmen memberikan solusi hukum yang efektif,
                    menyeluruh, dan bernilai tambah sesuai kebutuhan serta
                    tujuan setiap klien.
                  </p>
                </div>
              </details>

              <details
                name="tim"
                className="orang card-lift"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    cursor: "pointer",
                  }}
                >
                  <div className="photo-frame" style={{ flex: "0 0 240px" }}>
                    <img
                      src="/images/tim/bayu.jpg"
                      alt="Bayu Nando Prayoga, S.H."
                      style={{
                        width: "240px",
                        height: "320px",
                        objectFit: "cover",
                        objectPosition: "center 18%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flex: "1",
                      padding: "26px 24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "19px",
                        fontWeight: "700",
                        color: "var(--navy-950)",
                        lineHeight: "1.3",
                      }}
                    >
                      Bayu Nando Prayoga, S.H.
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11.5px",
                        color: "#B08D4F",
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                      }}
                    >
                      Junior Associate
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "9px",
                        marginTop: "8px",
                      }}
                    >
                      <span
                        className="chev"
                        style={{
                          flex: "0 0 30px",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          border: "1px solid var(--line)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--navy-800)"
                          strokeWidth="2"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </span>
                      <span
                        className="hint-tutup"
                        style={{
                          fontSize: "12px",
                          color: "var(--ink-soft)",
                          fontWeight: "600",
                        }}
                      >
                        Lihat profil
                      </span>
                      <span
                        className="hint-buka"
                        style={{
                          fontSize: "12px",
                          color: "var(--ink-soft)",
                          fontWeight: "600",
                        }}
                      >
                        Tutup profil
                      </span>
                    </span>
                  </div>
                </summary>
                <div style={{ padding: "0 26px 26px" }}>
                  <div
                    style={{
                      height: "1px",
                      background: "var(--line)",
                      marginBottom: "18px",
                    }}
                  ></div>
                  <p
                    className="t-bio"
                    style={{
                      fontSize: "13.5px",
                      lineHeight: "1.85",
                      color: "var(--ink-soft)",
                      margin: "0",
                      textAlign: "justify",
                      textJustify: "inter-word",
                      hyphens: "auto",
                    }}
                  >
                    Junior Associate di Al Farizki &amp; Zhafir Law Firm, Nando
                    menyelesaikan studi hukumnya di Universitas Brawijaya dengan
                    fokus pada Hukum Administrasi Negara. Ia membawa pengalaman
                    berharga di sektor non-litigasi dan bantuan hukum, menangani
                    beragam perkara mulai dari perizinan usaha, prosedur
                    administrasi, hingga hukum pertanahan dan agraria. Dengan
                    pola pikir yang humanis, teliti, dan metodis, Nando
                    berkomitmen penuh memberikan pendampingan hukum yang
                    objektif dan efektif sesuai tujuan kliennya.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <div
          className="sec"
          style={{
            width: "100%",
            background: "var(--paper)",
            padding: "70px 0",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div
            className="wrap"
            style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 40px" }}
          >
            <div
              style={{
                maxWidth: "620px",
                margin: "0 auto 44px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  letterSpacing: "2.5px",
                  color: "#B08D4F",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Klien Kami
              </span>
              <h2
                style={{
                  fontSize: "32px",
                  color: "var(--navy-950)",
                  fontWeight: "800",
                  margin: "14px 0 14px",
                }}
              >
                Dipercaya Lintas Sektor Industri
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.75",
                  color: "var(--ink-soft)",
                }}
              >
                Dari klinik kesehatan, energi, properti, hingga korporasi — kami
                mendampingi kebutuhan hukum mereka.
              </p>
            </div>
            <div
              className="grid-4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                gap: "24px",
              }}
            >
              <div
                className="card-lift kartu-klien"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "26px",
                }}
              >
                <img
                  className="client-logo"
                  src="/images/klien/ideal-dentist.png"
                  alt="Ideal Dentist"
                  style={{ maxHeight: "92px", maxWidth: "100%", width: "auto" }}
                />
              </div>
              <div
                className="card-lift kartu-klien"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "26px",
                }}
              >
                <img
                  className="client-logo"
                  src="/images/klien/recoil.png"
                  alt="Recoil"
                  style={{ maxHeight: "82px", maxWidth: "100%", width: "auto" }}
                />
              </div>
              <div
                className="card-lift kartu-klien"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "26px",
                }}
              >
                <img
                  className="client-logo"
                  src="/images/klien/oase.png"
                  alt="Oase"
                  style={{ maxHeight: "70px", maxWidth: "100%", width: "auto" }}
                />
              </div>
              <div
                className="card-lift kartu-klien"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "26px",
                }}
              >
                <img
                  className="client-logo"
                  src="/images/klien/pt-indie.png"
                  alt="PT. Indie"
                  style={{ maxHeight: "78px", maxWidth: "100%", width: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="sec"
          id="berita"
          style={{
            width: "100%",
            background: "var(--paper-alt)",
            padding: "100px 0",
          }}
        >
          <div
            className="wrap"
            style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 40px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "28px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "12.5px",
                    letterSpacing: "2.5px",
                    color: "#B08D4F",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  Berita &amp; Opini Hukum
                </span>
                <h2
                  style={{
                    fontSize: "34px",
                    color: "var(--navy-950)",
                    fontWeight: "800",
                    margin: "14px 0 0",
                  }}
                >
                  Wawasan dari Tim Kami
                </h2>
              </div>
            </div>

            <div
              className="filter-berita"
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginBottom: "34px",
              }}
            >
              <button
                style={{
                  fontSize: "12.5px",
                  fontWeight: "600",
                  padding: "9px 18px",
                  borderRadius: "20px",
                  background: "#173B6C",
                  color: "#FFFFFF",
                }}
              >
                Semua
              </button>
              <button
                style={{
                  fontSize: "12.5px",
                  fontWeight: "600",
                  padding: "9px 18px",
                  borderRadius: "20px",
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  color: "var(--navy-900)",
                }}
              >
                Opini Hukum
              </button>
              <button
                style={{
                  fontSize: "12.5px",
                  fontWeight: "600",
                  padding: "9px 18px",
                  borderRadius: "20px",
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  color: "var(--navy-900)",
                }}
              >
                Berita Kantor
              </button>
              <button
                style={{
                  fontSize: "12.5px",
                  fontWeight: "600",
                  padding: "9px 18px",
                  borderRadius: "20px",
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  color: "var(--navy-900)",
                }}
              >
                Legal Update
              </button>
            </div>

            <div
              className="berita-row"
              style={{
                display: "flex",
                gap: "28px",
                flexWrap: "wrap",
                alignItems: "stretch",
              }}
            >
              <div
                className="card-lift"
                style={{
                  flex: "1 1 560px",
                  minWidth: "320px",
                  background: "#FFFFFF",
                  border: "1px solid var(--line)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "260px",
                    background:
                      "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/images/motif-kincir.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      right: "-40px",
                      bottom: "-30px",
                      width: "240px",
                      opacity: "0.3",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.65)",
                      letterSpacing: "1px",
                      position: "relative",
                    }}
                  >
                    [GAMBAR SAMPUL ARTIKEL]
                  </span>
                </div>
                <div style={{ padding: "30px 32px 34px", flex: "1" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10.5px",
                        letterSpacing: "1px",
                        color: "#FFFFFF",
                        background: "#B08D4F",
                        padding: "4px 10px",
                        textTransform: "uppercase",
                        fontWeight: "700",
                      }}
                    >
                      Artikel Utama
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        letterSpacing: "1px",
                        color: "#B08D4F",
                        textTransform: "uppercase",
                        fontWeight: "700",
                      }}
                    >
                      Opini Hukum
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "24px",
                      color: "var(--navy-950)",
                      fontWeight: "700",
                      marginBottom: "12px",
                      lineHeight: "1.35",
                    }}
                  >
                    [Judul Artikel Utama Anda]
                  </h3>
                  <p
                    style={{
                      fontSize: "14.5px",
                      lineHeight: "1.75",
                      color: "var(--ink-soft)",
                      marginBottom: "20px",
                    }}
                  >
                    [Ringkasan artikel akan tampil di sini. Bagian ini cocok
                    untuk membahas isu hukum terkini yang sering ditanyakan
                    klien, sehingga website juga membantu ditemukan lewat
                    pencarian Google.]
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      fontSize: "12px",
                      color: "#98A2AE",
                    }}
                  >
                    <span>[Nama Penulis]</span>
                    <span>·</span>
                    <span>[Tanggal Publikasi]</span>
                    <span>·</span>
                    <span>5 menit baca</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  flex: "1 1 380px",
                  minWidth: "300px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div
                  className="card-lift"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    padding: "22px 24px",
                    position: "relative",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    className="ikon-berita"
                    style={{
                      flex: "0 0 58px",
                      height: "58px",
                      background: "var(--navy-100)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--navy-700)"
                      strokeWidth="1.3"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                  </div>
                  <div style={{ flex: "1" }}>
                    <span
                      style={{
                        fontSize: "10.5px",
                        letterSpacing: "1px",
                        color: "#B08D4F",
                        textTransform: "uppercase",
                        fontWeight: "700",
                      }}
                    >
                      Opini Hukum
                    </span>
                    <h3
                      style={{
                        fontSize: "15.5px",
                        color: "var(--navy-950)",
                        fontWeight: "700",
                        margin: "7px 0 7px",
                        lineHeight: "1.4",
                      }}
                    >
                      [Judul Artikel Opini Hukum]
                    </h3>
                    <span style={{ fontSize: "11.5px", color: "#98A2AE" }}>
                      [Tanggal Publikasi]
                    </span>
                  </div>
                </div>

                <div
                  className="card-lift"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    padding: "22px 24px",
                    position: "relative",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    className="ikon-berita"
                    style={{
                      flex: "0 0 58px",
                      height: "58px",
                      background: "var(--navy-100)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--navy-700)"
                      strokeWidth="1.3"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                  </div>
                  <div style={{ flex: "1" }}>
                    <span
                      style={{
                        fontSize: "10.5px",
                        letterSpacing: "1px",
                        color: "#B08D4F",
                        textTransform: "uppercase",
                        fontWeight: "700",
                      }}
                    >
                      Berita
                    </span>
                    <h3
                      style={{
                        fontSize: "15.5px",
                        color: "var(--navy-950)",
                        fontWeight: "700",
                        margin: "7px 0 7px",
                        lineHeight: "1.4",
                      }}
                    >
                      [Judul Berita Kantor]
                    </h3>
                    <span style={{ fontSize: "11.5px", color: "#98A2AE" }}>
                      [Tanggal Publikasi]
                    </span>
                  </div>
                </div>

                <div
                  className="card-lift"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--line)",
                    padding: "22px 24px",
                    position: "relative",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    className="ikon-berita"
                    style={{
                      flex: "0 0 58px",
                      height: "58px",
                      background: "var(--navy-100)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--navy-700)"
                      strokeWidth="1.3"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                  </div>
                  <div style={{ flex: "1" }}>
                    <span
                      style={{
                        fontSize: "10.5px",
                        letterSpacing: "1px",
                        color: "#B08D4F",
                        textTransform: "uppercase",
                        fontWeight: "700",
                      }}
                    >
                      Legal Update
                    </span>
                    <h3
                      style={{
                        fontSize: "15.5px",
                        color: "var(--navy-950)",
                        fontWeight: "700",
                        margin: "7px 0 7px",
                        lineHeight: "1.4",
                      }}
                    >
                      [Judul Pembaruan Regulasi]
                    </h3>
                    <span style={{ fontSize: "11.5px", color: "#98A2AE" }}>
                      [Tanggal Publikasi]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "44px" }}>
              <a
                href="#berita"
                className="btn-lift"
                style={{
                  display: "inline-block",
                  border: "1px solid #173B6C",
                  color: "#173B6C",
                  fontWeight: "600",
                  fontSize: "13.5px",
                  padding: "14px 34px",
                  borderRadius: "2px",
                  letterSpacing: "0.3px",
                }}
              >
                Lihat Semua Berita &amp; Opini
              </a>
            </div>
          </div>
        </div>

        <div
          className="sec"
          style={{
            width: "100%",
            background: "var(--navy-950)",
            padding: "64px 0",
          }}
        >
          <div
            className="wrap cta-band"
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "0 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "26px",
                  color: "#FFFFFF",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                Karena satu kesalahan hukum dapat merugikan segalanya.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#AEBBCF" }}>
                Konsultasikan kebutuhan hukum Anda dengan tim kami hari ini.
              </p>
            </div>
            <a
              href="https://wa.me/6285941862969?text=Halo%20Al%20Farizki%20%26%20Zhafir%20Law%20Firm%2C%20saya%20ingin%20berkonsultasi%20mengenai%20masalah%20hukum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift btn-wa"
              style={{
                background: "#B08D4F",
                color: "var(--navy-950)",
                fontWeight: "700",
                fontSize: "14px",
                padding: "16px 32px",
                borderRadius: "2px",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <svg
                className="ic-wa"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Chat via WhatsApp
            </a>
          </div>
        </div>

        <div
          className="sec"
          style={{
            width: "100%",
            background: "var(--navy-900)",
            padding: "70px 0 0",
          }}
        >
          <div
            className="wrap grid-footer"
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "0 40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "50px",
              paddingBottom: "50px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div>
              <img
                src="/images/logo-putih.png"
                alt="Logo Al Farizki &amp; Zhafir Law Firm"
                style={{
                  height: "40px",
                  width: "auto",
                  marginBottom: "18px",
                  display: "block",
                }}
              />
              <p
                style={{
                  fontSize: "13.5px",
                  lineHeight: "1.75",
                  color: "#AEBBCF",
                  maxWidth: "320px",
                }}
              >
                Firma hukum yang berbasis di Malang dengan cakupan layanan di
                seluruh Indonesia, mengutamakan solusi hukum yang preventif,
                profesional, dan berintegritas.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "1px",
                  color: "#B08D4F",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  marginBottom: "18px",
                }}
              >
                Navigasi
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <a
                  href="#beranda"
                  className="footer-link"
                  style={{
                    fontSize: "13.5px",
                    color: "#C9D3E0",
                    transition: "color .2s ease",
                  }}
                >
                  Beranda
                </a>

                <a
                  href="#tentang"
                  className="footer-link"
                  style={{
                    fontSize: "13.5px",
                    color: "#C9D3E0",
                    transition: "color .2s ease",
                  }}
                >
                  Tentang Kami
                </a>

                <a
                  href="#tim"
                  className="footer-link"
                  style={{
                    fontSize: "13.5px",
                    color: "#C9D3E0",
                    transition: "color .2s ease",
                  }}
                >
                  Tim Kami
                </a>

                <a
                  href="#layanan"
                  className="footer-link"
                  style={{
                    fontSize: "13.5px",
                    color: "#C9D3E0",
                    transition: "color .2s ease",
                  }}
                >
                  Layanan
                </a>

                <a
                  href="#berita"
                  className="footer-link"
                  style={{
                    fontSize: "13.5px",
                    color: "#C9D3E0",
                    transition: "color .2s ease",
                  }}
                >
                  Berita
                </a>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "1px",
                  color: "#B08D4F",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  marginBottom: "18px",
                }}
              >
                Kontak
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      flex: "0 0 26px",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "rgba(176,141,79,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B08D4F"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <span
                    style={{
                      fontSize: "13.5px",
                      color: "#C9D3E0",
                      lineHeight: "1.6",
                      paddingTop: "4px",
                    }}
                  >
                    Lowokwaru, Kota Malang
                  </span>
                </div>
                <a
                  href="mailto:alfarizkizhafirlawfirm@gmail.com"
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "13.5px",
                    color: "#C9D3E0",
                    transition: "color .2s ease",
                  }}
                >
                  <span
                    style={{
                      flex: "0 0 26px",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "rgba(176,141,79,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B08D4F"
                      strokeWidth="2"
                    >
                      <path d="M22 6c0-1.1-.9-2-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6z"></path>
                      <path d="m22 6-10 7L2 6"></path>
                    </svg>
                  </span>
                  alfarizkizhafirlawfirm@gmail.com
                </a>
                <a
                  href="https://wa.me/6285941862969?text=Halo%20Al%20Farizki%20%26%20Zhafir%20Law%20Firm%2C%20saya%20ingin%20berkonsultasi%20mengenai%20masalah%20hukum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "13.5px",
                    color: "#C9D3E0",
                    transition: "color .2s ease",
                  }}
                >
                  <span
                    style={{
                      flex: "0 0 26px",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "rgba(176,141,79,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B08D4F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </span>
                  WhatsApp &mdash; 0859-4186-2969
                </a>
              </div>
            </div>
          </div>
          <div
            className="wrap"
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "24px 40px",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "12.5px", color: "#7F91AA" }}>
              © 2026 Al Farizki &amp; Zhafir Law Firm. Seluruh hak cipta
              dilindungi.
            </span>
          </div>
        </div>

        <a
          href="https://wa.me/6285941862969?text=Halo%20Al%20Farizki%20%26%20Zhafir%20Law%20Firm%2C%20saya%20ingin%20berkonsultasi%20mengenai%20masalah%20hukum."
          target="_blank"
          rel="noopener noreferrer"
          className="wa-melayang"
          aria-label="Konsultasi via WhatsApp"
          style={{
            position: "fixed",
            right: "24px",
            bottom: "24px",
            zIndex: "60",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            className="wa-label"
            style={{
              background: "#FFFFFF",
              color: "var(--navy-950)",
              fontSize: "13px",
              fontWeight: "600",
              padding: "9px 15px",
              borderRadius: "20px",
              border: "1px solid var(--line)",
              boxShadow: "0 10px 24px -12px rgba(10,28,54,0.45)",
              whiteSpace: "nowrap",
            }}
          >
            Konsultasi via WhatsApp
          </span>
          <span
            className="wa-bulat"
            style={{
              position: "relative",
              width: "58px",
              height: "58px",
              flex: "0 0 58px",
              borderRadius: "50%",
              background: "#B08D4F",
              color: "var(--navy-950)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 14px 28px -10px rgba(10,28,54,0.6)",
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </span>
        </a>
      </div>
    </>
  );
}
