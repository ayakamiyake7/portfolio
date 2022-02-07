import React from "react";

const MainVisual = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#FEAB65] via-[#ECA7A4] to-[#BC98BF] relative pt-36 pb-36 lg:px-64">
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-widest text-center mb-10">
          Hi,
          <br className="md:hidden" />
          I’m Ayaka!
        </h1>
        <span className="text-white text-2xl block text-center tracking-wider mb-4 leading-2 after:absolute after:inline-block after:w-px after:h-16 after:bg-white after:left-0 after:right-0 after:m-auto after:bottom-10">
          Front-end Developer
          <br />
          Based in the UK
        </span>
        <div className="flex justify-center px-4">
          <a
            href="https://www.linkedin.com/in/ayaka-miyake/"
            target="_blank"
            rel="noopener"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_203_104)">
                <path
                  d="M0 3.26146C0 2.58805 0.225232 2.03249 0.675676 1.5948C1.12612 1.15708 1.71172 0.938232 2.43243 0.938232C3.14029 0.938232 3.71299 1.15371 4.15058 1.5847C4.60102 2.02914 4.82625 2.60825 4.82625 3.32207C4.82625 3.96853 4.60747 4.50724 4.16988 4.93823C3.71944 5.38267 3.12741 5.60489 2.39382 5.60489H2.37452C1.66666 5.60489 1.09396 5.38267 0.656371 4.93823C0.218784 4.49378 0 3.93485 0 3.26146ZM0.250965 20.9382V7.44327H4.53668V20.9382H0.250965ZM6.9112 20.9382H11.1969V13.4029C11.1969 12.9315 11.2484 12.5678 11.3514 12.312C11.5315 11.854 11.805 11.4668 12.1718 11.1503C12.5386 10.8338 12.9987 10.6756 13.5521 10.6756C14.9936 10.6756 15.7143 11.6924 15.7143 13.7261V20.9382H20V13.2008C20 11.2076 19.5496 9.6958 18.6486 8.6655C17.7477 7.63519 16.5573 7.12004 15.0772 7.12004C13.417 7.12004 12.1236 7.86752 11.1969 9.36246V9.40287H11.1776L11.1969 9.36246V7.44327H6.9112C6.93693 7.87424 6.94981 9.2143 6.94981 11.4635C6.94981 13.7126 6.93693 16.8709 6.9112 20.9382Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_203_104">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.938232)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a
            href="https://github.com/ayakamiyake7/"
            target="_blank"
            rel="noopener"
            className="ml-4"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.938232C4.47833 0.938232 0 5.41573 0 10.9382C0 15.3566 2.865 19.1049 6.83917 20.4274C7.33833 20.5199 7.5 20.2099 7.5 19.9466V18.0849C4.71833 18.6899 4.13917 16.9049 4.13917 16.9049C3.68417 15.7491 3.02833 15.4416 3.02833 15.4416C2.12083 14.8207 3.0975 14.8341 3.0975 14.8341C4.10167 14.9041 4.63 15.8649 4.63 15.8649C5.52167 17.3932 6.96917 16.9516 7.54 16.6957C7.62917 16.0499 7.88833 15.6082 8.175 15.3591C5.95417 15.1049 3.61917 14.2474 3.61917 10.4166C3.61917 9.32407 4.01 8.4324 4.64917 7.7324C4.54583 7.4799 4.20333 6.4624 4.74667 5.08573C4.74667 5.08573 5.58667 4.8174 7.4975 6.11073C8.295 5.88907 9.15 5.77823 10 5.77407C10.85 5.77823 11.7058 5.88907 12.505 6.11073C14.4142 4.8174 15.2525 5.08573 15.2525 5.08573C15.7967 6.46323 15.4542 7.48073 15.3508 7.7324C15.9925 8.4324 16.38 9.3249 16.38 10.4166C16.38 14.2574 14.0408 15.1032 11.8142 15.3507C12.1725 15.6607 12.5 16.2691 12.5 17.2024V19.9466C12.5 20.2124 12.66 20.5249 13.1675 20.4266C17.1383 19.1024 20 15.3549 20 10.9382C20 5.41573 15.5225 0.938232 10 0.938232Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default MainVisual;
