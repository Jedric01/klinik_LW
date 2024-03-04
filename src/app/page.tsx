import Image from "next/image";
import styles from "./page.module.css";
import TestimonyBox from "./components/testimony_box";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  let testimony_list = [
    {
      desc: "Saya sangat merekomendasikan Klinik Kecantikan LW kepada siapa pun yang mencari solusi untuk masalah kulit mereka; tim ahli, perawatan berkualitas, dan hasil yang luar biasa telah mengubah penampilan dan kepercayaan diri saya secara signifikan.",
      author: "Maria",
      occupation: "Mahasiswi",
    },
    {
      desc: "Saya sangat merekomendasikan Klinik Kecantikan LW kepada siapa pun yang mencari solusi untuk masalah kulit mereka; tim ahli, perawatan berkualitas, dan hasil yang luar biasa telah mengubah penampilan dan kepercayaan diri saya secara signifikan.",
      author: "Maria",
      occupation: "Mahasiswi",
    },
    {
      desc: "Saya sangat merekomendasikan Klinik Kecantikan LW kepada siapa pun yang mencari solusi untuk masalah kulit mereka; tim ahli, perawatan berkualitas, dan hasil yang luar biasa telah mengubah penampilan dan kepercayaan diri saya secara signifikan.",
      author: "Maria",
      occupation: "Mahasiswi",
    },
  ];

  let packet_images = ["/packet1.jpeg", "/packet1.jpeg", "/packet1.jpeg"];

  return (
    <>
      <div className={styles.action_outer_container}>
        <div className={styles.action_container}>
          <div className={styles.action_description}>
            <h1 className={styles.action_title}>
              Dapatkan Penampilan yang Memukau dengan Klinik Kecantikan Lenny
              Wijaya!
            </h1>
            <p className={styles.action_description}>
              Jadilah yang terbaik dengan perawatan wajah, rambut, dan tubuh
              kami yang inovatif. Kunjungi kami sekarang dan rasakan
              perbedaannya!
            </p>
            <a href="https://api.whatsapp.com/send?phone=6282267102757&text=Halo%20Klinik%20LW%2C%20saya%20mau%20reservasi%20treatmentnya%2C%20bisa%20dibantu?%3F">
              <button className={styles.action_button}>
                <FaWhatsapp /> Hubungi Kami
              </button>
            </a>
          </div>
          <div className={styles.action_image_container}>
            <Image
              src="/doctor_potrait.jpeg"
              alt="Image of Doctor Lenny Wijaya"
              sizes="100vw"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <svg
          className={styles.svg_triangle}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className={styles.shape_triangle}
            d="M0,6V0h1000v100L0,6z"
          ></path>
        </svg>
      </div>

      <div className={styles.challenge_container}>
        <h1>Peroleh Kecantikan yang Anda Impikan</h1>
        <p>
          Kami memiliki tim ahli yang berpengalaman dalam memberikan perawatan
          kecantikan terbaik. Dari perawatan wajah yang menyegarkan, perawatan
          rambut yang mengkilap, hingga perawatan tubuh yang menenangkan, kami
          menawarkan layanan yang dirancang khusus untuk memenuhi kebutuhan
          Anda.
        </p>
      </div>

      <div className={styles.history_container}>
        <div className={styles.history_description_container}>
          <p className={styles.clinic_name}>KLINIK KECANTIKAN LENNY WIJAYA</p>
          <h1>Keindahan yang Dipersonalisasi</h1>
          <p className={styles.history_description}>
            Kami bukan hanya klinik kecantikan, tapi penjaga kecantikan pribadi
            Anda. Klinik Kecantikan LW menawarkan perawatan yang
            dipersonalisasi, membawa kecantikan Anda ke tingkat yang baru.
            Klinik kami sudah berdiri sejak tahun 1993.
          </p>
          <p className={styles.doctor_name}>Dr.Lenny Wijaya M-Biomed AAAM</p>
          <p>
            Tetap stand by di klinik, jangan lewatkan{" "}
            <strong>GRATIS KONSULTASI DI JAM BERIKUT</strong>:
          </p>
          <div className={styles.consultation_times}>
            <p>Setiap Hari Jam 09:00 - 18:00 WIB</p>
            <p>Hari Minggu Jam 09:00 - 16:00 WIB</p>
          </div>

          <div className={styles.years_in_service}>
            <h1>31+</h1>
            <p>Tahun Berdiri</p>
          </div>
        </div>
        <div className={styles.clinic_images_container}>
          <Image
            src="/gambar_praktek.png"
            alt="picture of clinic and doctor"
            sizes="100vw"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className={styles.packet_outer_container}>
        <p className={styles.packet_title}>PAKET</p>
        <h1>Paket Perawatan Kecantikan Khusus dari Klinik Kecantikan LW</h1>
        <p>
          Pilihlah dari berbagai paket perawatan kecantikan yang dirancang
          khusus untuk kebutuhan kulit Anda. Dengan paket eksklusif kami,
          kecantikan sejati Anda menanti untuk diungkap.
        </p>
        <div className={styles.packet_inner_container}>
          {packet_images.map((src) => (
            <div key={src} className={styles.packet_images}>
              <Image
                src={src}
                alt="picture of packet"
                width={320}
                height={267}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.testimony_outer_container}>
        <p className={styles.testimony_title}>Testimoni</p>
        <h1>Dengarkan Cerita Mereka</h1>
        <p>Pengalaman Kecantikan Luar Biasa di Klinik Kecantikan LW</p>
        <div className={styles.testimony_inner_container}>
          {testimony_list.map((testimony) => (
            <TestimonyBox
              description={testimony.desc}
              author={testimony.author}
              occupation={testimony.occupation}
              key={testimony.desc}
            />
          ))}
        </div>
      </div>

      <div className={styles.contact_container}>
        <div className={styles.contact_color_wrapper}>
          <div className={styles.contact_description}>
            <p>Hubungi Sekarang</p>
            <h1>Mulailah Perjalanan Kecantikan Anda</h1>
            <p className={styles.call_to_action}>
              Jangan ragu lagi, reservasikan waktu Anda sekarang di Klinik
              Kecantikan LW untuk konsultasi gratis dan mulailah perjalanan
              menuju penampilan yang memukau dan percaya diri.
            </p>
            <a href="https://api.whatsapp.com/send?phone=6282267102757&text=Halo%20Klinik%20LW%2C%20saya%20mau%20reservasi%20treatmentnya%2C%20bisa%20dibantu?%3F">
              <button className={styles.action_button}>
                <FaWhatsapp /> Reservasi Sekarang
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
