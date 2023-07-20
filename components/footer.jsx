import Link from "next/link";
import { footerMenuList, socialIcons } from "../data/footer_data";
import Image from "next/image";

const footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}

      <footer className="dark:bg-jacarta-900 page-footer bg-white">
        <div className="container">
          <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
            <div className="col-span-3 md:col-span-4">
              {/* <!-- Logo --> */}
              <Link className="shrink-0" href="/">
                <a>
                  <div className="dark:hidden display flex items-center">
                    <Image
                      src={"/images/logo.png"}
                      height={30}
                      width={30}
                      alt="Wit Capital | Asesoría de vanguardia"
                      className="max-h-7 h-auto "
                    />
                    <span className="text-jacarta-700 font-display  items-center text-md">
                      WIT CAPITAL
                    </span>
                    
                  </div>
                  <div className="hidden dark:flex items-center">
                    <Image
                      src={"/images/logo_white.png"}
                      height={30}
                      width={30}
                      alt="Wit Capital | Asesoría de vanguardia"
                    />
                    <span className="text-jacarta-700 font-display  items-center text-md text-white">
                      WIT CAPITAL
                    </span>
                  </div>
                </a>
              </Link>
              
              
              <p className="dark:text-jacarta-300 mb-12 mt-5">
                Asesoría de vanguardia, con visión de negocios.
              </p>

              {/* <!-- Socials --> */}
              <div className="flex space-x-5">
                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link href={href} key={id}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer"
                      >
                        <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
                          <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                        </svg>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>

            {footerMenuList.map((single) => (
              <div
                className={`col-span-full sm:col-span-3 md:col-span-2 ${single.diffClass}`}
                key={single.id}
              >
                <h3 className="font-display text-jacarta-700 mb-6 text-sm dark:text-white">
                  {single.title}
                </h3>
                <ul className="dark:text-jacarta-300 flex flex-col space-y-1">
                  {single.list.map((item) => {
                    const { id, href, text } = item;
                    return (
                      <li key={id}>
                        <Link href={href}>
                          <a className="hover:text-accent dark:hover:text-white">
                            {text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              <span>© {new Date().getFullYear()} WitCapital — Hecho por</span>
              <Link href="mailto:oedwin.sh@gmail.com">
                <a className="hover:text-accent dark:hover:text-white">
                  {" "}
                  oedwin
                </a>
              </Link>
            </span>

            <ul className="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
              <li>
                <Link href="/tarms">
                  <a className="hover:text-accent dark:hover:text-white">
                    Terminos y condiciones
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tarms">
                  <a className="hover:text-accent dark:hover:text-white">
                    Política de privacidad
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
