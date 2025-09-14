"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, X } from "lucide-react"
import Image from "next/image"

const teachers = [
  {
    id: "son",
    name: "Сон А. Р.",
    fullName: "Александр Родионович Сон",
    description:
      "2-х кратный чемпион России, чемпион Европы, чемпион мира, мастер спорта международного класса по акробатике. Тренер по акробатике с 2013 года.",
    photo: "/images/teachers/san.jpg",
    role: "тренер",
  },
  {
    id: "kulaeva",
    name: "Кулаева О. П.",
    fullName: "Кулаева Ольга Павловна",
    description:
      'Выпускница Челябинской академии культуры и искусств, участница международных лабораторий по современной хореографии, а также лаборатории по созданию танцевального спектакля на основе сказок. Создатель и художественный руководитель хореографического коллектива "ТанцАрти" - Лауреата региональных и международных конкурсов 2012-2019г.г.',
    photo: "/images/teachers/kulaeva.jpg",
    role: "преподаватель",
  },
  {
    id: "fedorov",
    name: "Фёдоров Я. М.",
    fullName: "Фёдоров Ярослав Маркович",
    description:
      'актёр, солист театральной студии "Артист". Молодой, креативный, но уже с опытом работы с детьми в качестве преподавателя.',
    photo: "/images/teachers/fedorov.jpg",
    role: "преподаватель",
  },
]

const disciplines = [
  {
    title: "Акробатика",
    description: "Владение телом на грани возможного",
    teacher: teachers[0],
    image: "/images/acrobatics.png",
  },
  {
    title: "Хореография",
    description: "Гармония пластики, музыки и чувств",
    teacher: teachers[1],
    image: "/images/choreography.png",
  },
  {
    title: "Актёрское мастерство",
    description: "Чтобы каждый выход на сцену был уверенным и захватывающим!",
    teacher: teachers[2],
    image: "/images/acting.png",
  },
]

const galleryImages = [
  {
    src: "/images/gallery/1.jpg",
    alt: "Групповое выступление детей",
    className: "col-span-2 row-span-2",
    isPulse: true,
  },
  { src: "/images/gallery/2.jpg", alt: "Выступление в клетчатых костюмах", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/3.jpg", alt: "Сольное выступление в белом", className: "col-span-1 row-span-2" },
  { src: "/images/gallery/12.jpg", alt: "Театральное выступление на сцене", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/5.jpg", alt: "Танец в голубом платье", className: "col-span-2 row-span-1" },
  {
    src: "/images/gallery/17.jpg",
    alt: "Акробатическое выступление в синих костюмах",
    className: "col-span-1 row-span-2",
  },
  { src: "/images/gallery/21.jpg", alt: "Детское выступление в ярких костюмах", className: "col-span-2 row-span-1" },
  { src: "/images/gallery/8.jpg", alt: "Тренировка в зале", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/10.jpg", alt: "Актёрское выступление в костюме", className: "col-span-1 row-span-1" },
  {
    src: "/images/gallery/20.jpg",
    alt: "Танцевальное выступление в бирюзовых костюмах",
    className: "col-span-2 row-span-1",
  },
  { src: "/images/gallery/16.jpg", alt: "Групповые акробатические упражнения", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/19.jpg", alt: "Тренировка в спортзале", className: "col-span-2 row-span-1" },
  { src: "/images/gallery/15.jpg", alt: "Парная акробатика в ярких костюмах", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/22.jpg", alt: "Подготовка к выступлению", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/18.jpg", alt: "Акробатические упражнения на матах", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/14.jpg", alt: "Выступление в фиолетовых костюмах", className: "col-span-2 row-span-1" },
  { src: "/images/gallery/23.jpg", alt: "Театральное выступление с гримом", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/13.jpg", alt: "Групповое фото актёров после спектакля", className: "col-span-1 row-span-1" },
  { src: "/images/gallery/6.jpg", alt: "Выступление на сцене", className: "col-span-1 row-span-1" },
]

export default function DanceStudio() {
  const [hoveredTeacher, setHoveredTeacher] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E1DBD8" }}>
      <header className="relative h-96 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/header.jpg" alt="Танцевальное выступление" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-between p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl heading-font">
            Территория акробатики и хореографии "Ключи"
          </h1>
          <div className="self-end text-right bg-black/20 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-2 text-white mb-4 contact-info">
              <Phone className="h-5 w-5" />
              <span className="text-lg font-medium">+7 918 008-53-88</span>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                style={{ backgroundColor: "#24A1DE" }}
                className="hover:opacity-90 text-white px-6 py-2 font-medium"
              >
                <a href="https://t.me/OKulaeva" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </Button>
              <Button
                asChild
                style={{ backgroundColor: "#2CB742" }}
                className="hover:opacity-90 text-white px-6 py-2 font-medium"
              >
                <a href="https://wa.me/79128945217" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-12">
        <section className="mb-16">
          <p
            className="text-xl md:text-2xl leading-relaxed text-center max-w-4xl mx-auto body-font"
            style={{ color: "#803329" }}
          >
            Наш проект - это творческая лаборатория для раскрытия личности, где важен каждый ребёнок, который, развивая
            свои физические данные и творческие способности может проявить себя как личность в составе команды.
          </p>
        </section>

        <section className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl mb-8 body-font leading-relaxed font-bold" style={{ color: "#803329" }}>
              ВАЖНО!
              <br />С 1 по 10 сентября запись детей по телефону в группы 7-9 и 10-12 лет
              <br />
              10 сентября – первое пробное занятие и беседа преподавателя с родителями!
            </p>
            <Button
              asChild
              size="sm"
              className="text-sm px-4 py-2 font-bold contact-info mb-4"
              style={{ backgroundColor: "#F46002", color: "white" }}
            >
              <a href="tel:+79186598598">Тык!</a>
            </Button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 heading-font" style={{ color: "#F46002" }}>
            Ключевые направления
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {disciplines.map((discipline, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg shadow-lg mb-6 h-full flex flex-col">
                  <div className="p-6 pb-4">
                    <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={discipline.image || "/placeholder.svg"}
                        alt={discipline.title}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="px-8 pb-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-4 heading-font" style={{ color: "#AE5229" }}>
                      {discipline.title}
                    </h3>
                    <p className="text-lg mb-6 body-font flex-1" style={{ color: "#803329" }}>
                      {discipline.description}
                    </p>

                    <div className="relative mt-auto">
                      <div
                        onMouseEnter={() => setHoveredTeacher(discipline.teacher.id)}
                        onMouseLeave={() => setHoveredTeacher(null)}
                      >
                        <p className="text-sm text-gray-400 mb-2 contact-info">{discipline.teacher.role}</p>
                        <button
                          className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-xl shadow-lg contact-info transform hover:scale-105 ${
                            discipline.teacher.id === "son" ? "animate-pulse" : ""
                          }`}
                          style={{
                            backgroundColor: "#CC986B",
                            color: "white",
                            border: "none",
                            boxShadow: "0 4px 15px rgba(204, 152, 107, 0.4)",
                            animation: discipline.teacher.id === "son" ? "heartbeat 1.5s ease-in-out infinite" : "none",
                          }}
                        >
                          {discipline.teacher.name}
                        </button>

                        <div
                          className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-20 transition-all duration-300 ${
                            hoveredTeacher === discipline.teacher.id
                              ? "opacity-100 transform translate-y-0"
                              : "opacity-0 transform -translate-y-2 pointer-events-none"
                          }`}
                        >
                          <div className="aspect-square w-full bg-gray-200 mb-4">
                            <Image
                              src={discipline.teacher.photo || "/placeholder.svg"}
                              alt={discipline.teacher.fullName}
                              width={200}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <p className="text-sm body-font" style={{ color: "#803329" }}>
                              <span className="font-semibold">{discipline.teacher.fullName}</span> -{" "}
                              {discipline.teacher.id === "kulaeva" ? (
                                <>
                                  Выпускница Челябинской академии культуры и искусств, участница международных
                                  лабораторий по современной хореографии, а также лаборатории по созданию танцевального
                                  спектакля на основе сказок. Создатель и художественный руководитель хореографического
                                  коллектива{" "}
                                  <a
                                    href="https://vk.com/public48400853"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                  >
                                    "ТанцАрти"
                                  </a>{" "}
                                  - Лауреата региональных и международных конкурсов 2012-2019г.г.
                                </>
                              ) : (
                                discipline.teacher.description
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 heading-font" style={{ color: "#F46002" }}>
              Дополнительно:
            </h3>
            <div className="text-xl body-font leading-relaxed" style={{ color: "#803329" }}>
              <p className="mb-4">
                <span style={{ color: "#F46002", fontWeight: "bold" }}>1.</span> Классический экзерсис, развитие данных
                и эстетики движения для спортсменов: гимнасток, акробатов, синхронистов, фигуристов. Индивидуальные
                занятия и в группах.
              </p>
              <p className="mb-4">
                <span style={{ color: "#F46002", fontWeight: "bold" }}>2.</span> Индивидуальные занятия по акробатике.
              </p>
              <p className="mb-4">
                <span style={{ color: "#F46002", fontWeight: "bold" }}>3.</span> Постановка танцев сольных и массовых.
              </p>
            </div>
          </div>
        </section>

        <div className="h-4"></div>

        <section className="mb-16 -mx-8">
          <div className="w-full">
            <div className="hidden md:block">
              <Image
                src="/images/final-variant.png"
                alt="Достойному выступлению на сцене предшествуют"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="block md:hidden">
              <Image
                src="/images/mobile-variant.png"
                alt="Достойному выступлению на сцене предшествуют"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 heading-font" style={{ color: "#F46002" }}>
            Где мы находимся?
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-full rounded-lg overflow-hidden">
              <Image
                src="/images/map-location.png"
                alt="Карта с адресом: Пригородная улица, 179"
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl body-font mb-2" style={{ color: "#803329" }}>
                Пригородная улица, 179
              </p>
              <p className="text-lg contact-info" style={{ color: "#AE5229" }}>
                Приходите к нам на занятия!
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 heading-font" style={{ color: "#F46002" }}>
            Стоимость обучения
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-lg body-font" style={{ color: "#803329" }}>
                      Абонемент 8 занятий
                    </td>
                    <td className="px-6 py-4 text-lg font-bold text-right" style={{ color: "#F46002" }}>
                      3500₽
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-lg body-font" style={{ color: "#803329" }}>
                      Абонемент 12 занятий
                    </td>
                    <td className="px-6 py-4 text-lg font-bold text-right" style={{ color: "#F46002" }}>
                      4500₽
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-lg body-font" style={{ color: "#803329" }}>
                      Разовое (пробное) занятие
                    </td>
                    <td className="px-6 py-4 text-lg font-bold text-right" style={{ color: "#F46002" }}>
                      500₽
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-lg body-font" style={{ color: "#803329" }}>
                      Индивидуальное занятие
                    </td>
                    <td className="px-6 py-4 text-lg font-bold text-right" style={{ color: "#F46002" }}>
                      1500₽
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg body-font leading-relaxed max-w-2xl mx-auto" style={{ color: "#803329" }}>
                В процессе занятий ребёнок сможет определиться, что ему ближе — спорт или хореография. Исходя из его
                предпочтений, мы скорректируем учебный план, сделав акцент на выбранном направлении.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 heading-font" style={{ color: "#F46002" }}>
            Галерея
          </h2>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 heading-font" style={{ color: "#AE5229" }}>
              Фото
            </h3>

            <div className="grid grid-cols-4 gap-4 auto-rows-[200px] mb-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`${image.className} overflow-hidden rounded-lg shadow-lg cursor-pointer`}
                  onClick={() => openImageModal(image.src)}
                  style={{
                    animation: image.isPulse ? "heartbeat 1.5s ease-in-out infinite" : "none",
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 heading-font" style={{ color: "#AE5229" }}>
              Наши преподаватели
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="w-full aspect-[9/16] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <video controls className="w-full h-full object-cover">
                        <source src={`/videos/${teacher.id}.mp4`} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                      </video>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center mb-8 heading-font" style={{ color: "#AE5229" }}>
              Занятия
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-full aspect-[9/16] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <video controls className="w-full h-full object-cover">
                      <source src="/videos/acti.mp4" type="video/mp4" />
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-full aspect-[9/16] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <video controls className="w-full h-full object-cover">
                      <source src="/videos/acro.mp4" type="video/mp4" />
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-full aspect-[9/16] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <video controls className="w-full h-full object-cover">
                      <source src="/videos/chor.mp4" type="video/mp4" />
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Увеличенное изображение"
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <footer className="bg-black text-white py-8 px-8">
        <div className="container mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-center items-start gap-32">
            <div>
              <Image
                src="/images/kluchi-logo.png"
                alt="Ключи логотип"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-4" style={{ color: "#f46002" }}>
                Соцсети:
              </h4>
              <div className="flex flex-col gap-2 items-start">
                <a
                  href="https://vk.com/alexander_son"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#f46002" }}
                >
                  ВК
                </a>
                <a
                  href="https://vk.com/okulaeva8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#f46002" }}
                >
                  ВК
                </a>
                <a
                  href="https://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#f46002" }}
                >
                  Instagram
                </a>
                <a
                  href="https://t.me/krasava1702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity mt-4"
                  style={{ color: "#f46002" }}
                >
                  Конструктор сайта
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden text-center">
            <div className="mb-6">
              <Image
                src="/images/kluchi-logo.png"
                alt="Ключи логотип"
                width={120}
                height={60}
                className="object-contain mx-auto"
              />
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4" style={{ color: "#f46002" }}>
                Соцсети:
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://vk.com/alexander_son"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#f46002" }}
                >
                  ВК
                </a>
                <a
                  href="https://vk.com/okulaeva8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#f46002" }}
                >
                  ВК
                </a>
                <a
                  href="https://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#f46002" }}
                >
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <a
                href="https://t.me/krasava1702"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ color: "#f46002" }}
              >
                Конструктор сайта
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
