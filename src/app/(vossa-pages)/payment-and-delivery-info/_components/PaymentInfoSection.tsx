import Link from "next/link";
import { paymentSections } from "@/components/ui/data";
import { ButtonLink } from "@/components/ui/Buttons";

export function PaymentInfoSection() {
  return (
    <section className="px-4 py-8 sm:px-8 xl:px-[60px] xl:py-12">
      <div className="mx-auto max-w-[1728px]">
        <div className="grid gap-10 xl:grid-cols-[340px_1fr]">
          <aside className="xl:sticky xl:top-[118px]">
            <p className="text-[14px] uppercase tracking-[0.16em] text-[#38312a]/45">
              Доставка та оплата
            </p>
            <h1 className="mt-4 text-[38px] uppercase leading-[0.92] text-[#38312a] sm:text-[48px] xl:text-[56px]">
              Доставка та оплата
            </h1>

            <nav className="mt-8 rounded-[28px] border border-[#38312a]/10 bg-white p-5 shadow-[0_12px_40px_rgba(56,49,42,0.05)]">
              <ol className="space-y-2">
                {paymentSections.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="block rounded-[16px] px-4 py-3 text-[14px] uppercase tracking-[0.12em] text-[#38312a]/68 transition hover:bg-[#f6f3ef] hover:text-[#38312a]"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-5">
            {paymentSections.map((section, index) => (
              <article
                id={section.id}
                key={section.id}
                className="scroll-mt-32 rounded-[28px] border border-[#38312a]/10 bg-white p-6 shadow-[0_12px_40px_rgba(56,49,42,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[22px] uppercase leading-none text-[#b99b6e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-[28px] uppercase leading-none text-[#38312a]">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-4 text-[17px] leading-[1.58] text-[#38312a]/74">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {section.bullets ? (
                      <ul className="mt-5 space-y-2 text-[16px] leading-[1.52] text-[#38312a]/74">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-[#b99b6e]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}

            <div className="pt-2">
              <ButtonLink href="/contact">Зв&apos;язатись з нами</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
