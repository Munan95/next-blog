import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function TeamCard({ name, role, bio, email, image }) {
  return (
    <div
      className={`${montserrat.className} mx-auto w-full max-w-[390] rounded-[28px] border border-sky-100 bg-white px-8 pb-5 pt-5 text-center shadow-[0_10px_40px_rgba(32,188,203,0.15)]`}
    >
      {/* Avatar */}
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-sky-100">
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            sizes="112px"
            className="object-cover"
          />
        )}
      </div>

      {/* Name + role */}
      <h3 className="mt-5 text-sm font-bold text-slate-800">{name}</h3>
      <p className="mt-2 text-[13px] text-sky-600">{role}</p>

      {/* Bio */}
      <p className="mt-3 text-[13px] leading-relaxed text-slate-700">{bio}</p>

      {/* Email */}
      {email && (
        <a
          href={`mailto:${email}`}
          className="mt-3 inline-block text-[13px] text-sky-600 hover:underline"
        >
          {email}
        </a>
      )}
    </div>
  );
}
