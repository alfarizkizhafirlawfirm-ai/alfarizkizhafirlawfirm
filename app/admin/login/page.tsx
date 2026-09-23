import Image from "next/image";
import Link from "next/link";
import { login } from "./actions";

export const metadata = {
  title: "Login Admin — Al Farizki & Zhafir Law Firm",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const error = resolvedParams.error as string | undefined;

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white">
      {/* panel kiri */}
      <div className="panel md:w-[520px] w-full flex-none bg-navy-950 px-8 py-10 md:px-[52px] md:py-[56px] flex flex-col justify-between relative overflow-hidden">
        <Image
          className="kincir"
          src="/images/motif-kincir.png"
          alt=""
          aria-hidden="true"
          width={300}
          height={300}
          style={{
            position: "absolute",
            left: "-60px",
            bottom: "-50px",
            width: "300px",
            height: "auto",
            opacity: 0.18,
            transform: "rotate(-12deg)",
          }}
        />
        <div style={{ position: "relative" }}>
          <Image
            className="logo"
            src="/images/logo-putih.png"
            alt="Logo Al Farizki & Zhafir Law Firm"
            width={120}
            height={58}
            style={{
              height: "58px",
              width: "auto",
              display: "block",
              marginBottom: "56px",
            }}
          />
          <h2
            style={{
              fontSize: "32px",
              color: "#FFFFFF",
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: "20px",
            }}
          >
            Satu website,
            <br />
            dua tampilan.
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#B7C3D6",
              maxWidth: "340px",
            }}
          >
            Pengunjung membuka alamat yang sama dan melihat website kantor
            seperti biasa. Admin yang sudah masuk akan melihat tombol kelola di
            halaman yang sama &mdash; tidak perlu website kedua.
          </p>
        </div>
        <div
          className="cek"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "rgba(176,141,79,0.2)",
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
                stroke="var(--gold)"
                strokeWidth="2.5"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </span>
            <span style={{ fontSize: "13.5px", color: "#C9D3E0" }}>
              alfarizkizhafir.id &mdash; halaman publik
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: "rgba(176,141,79,0.2)",
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
                stroke="var(--gold)"
                strokeWidth="2.5"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </span>
            <span style={{ fontSize: "13.5px", color: "#C9D3E0" }}>
              alfarizkizhafir.id/admin &mdash; setelah login
            </span>
          </div>
        </div>
      </div>

      {/* form login */}
      <div className="formwrap flex-1 min-w-0 flex items-center justify-center p-8 md:p-[56px] bg-paper">
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "2.5px",
              color: "#B08D4F",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Area Admin
          </span>
          <h1
            style={{
              fontSize: "30px",
              color: "var(--navy-950)",
              fontWeight: 700,
              margin: "12px 0 10px",
            }}
          >
            Masuk ke Dashboard
          </h1>
          <p
            className="ket"
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              color: "var(--ink-soft)",
              marginBottom: "32px",
            }}
          >
            Khusus pengelola website kantor. Pengunjung biasa tidak pernah
            melihat halaman ini.
          </p>

          {error && (
            <div
              style={{
                padding: "12px 16px",
                background: "#FEE2E2",
                borderLeft: "4px solid #EF4444",
                color: "#991B1B",
                fontSize: "13px",
                marginBottom: "24px",
              }}
            >
              {error}
            </div>
          )}

          <form action={login}>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  color: "var(--navy-900)",
                  marginBottom: "8px",
                  letterSpacing: "0.3px",
                }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="admin@alfarizkizhafir.id"
                required
                style={{
                  width: "100%",
                  height: "48px",
                  padding: "0 16px",
                  fontSize: "14px",
                  border: "1px solid var(--line)",
                  background: "#FFFFFF",
                  color: "var(--ink)",
                }}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label
                htmlFor="sandi"
                style={{
                  display: "block",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  color: "var(--navy-900)",
                  marginBottom: "8px",
                  letterSpacing: "0.3px",
                }}
              >
                Kata Sandi
              </label>
              <input
                id="sandi"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                style={{
                  width: "100%",
                  height: "48px",
                  padding: "0 16px",
                  fontSize: "14px",
                  border: "1px solid var(--line)",
                  background: "#FFFFFF",
                  color: "var(--ink)",
                }}
              />
            </div>

            <div
              className="baris"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "28px",
              }}
            >
              <label
                htmlFor="ingat"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "var(--ink-soft)",
                  cursor: "pointer",
                }}
              >
                <input
                  id="ingat"
                  type="checkbox"
                  style={{
                    width: "15px",
                    height: "15px",
                    accentColor: "#173B6C",
                  }}
                />
                Ingat saya
              </label>
              <Link
                href="#lupa"
                style={{ fontSize: "13px", color: "#B08D4F", fontWeight: 600 }}
              >
                Lupa kata sandi?
              </Link>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                height: "50px",
                background: "#173B6C",
                color: "#FFFFFF",
                fontSize: "14.5px",
                fontWeight: 700,
                border: "none",
                letterSpacing: "0.3px",
              }}
            >
              Masuk
            </button>
          </form>

          <p
            className="kaki"
            style={{
              fontSize: "12.5px",
              color: "var(--ink-soft)",
              textAlign: "center",
              marginTop: "26px",
              lineHeight: 1.7,
            }}
          >
            Lupa akses? Hubungi pengelola website kantor.
          </p>

          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingTop: "24px",
              borderTop: "1px solid var(--line)",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "13px",
                color: "var(--navy-900)",
                fontWeight: 600,
              }}
            >
              &larr; Kembali ke website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
