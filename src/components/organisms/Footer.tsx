import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="md:flex md:justify-center md:mb-10 px-4 lg:p-0 hidden">
        <a
          href="https://www.linkedin.com/in/ayaka-miyake/"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_203_112)">
              <path
                d="M0 2.20707C0 1.56733 0.225232 1.03955 0.675676 0.623737C1.12612 0.207906 1.71172 0 2.43243 0C3.14029 0 3.71299 0.204701 4.15058 0.614141C4.60102 1.03636 4.82625 1.58652 4.82625 2.26464C4.82625 2.87878 4.60747 3.39056 4.16988 3.8C3.71944 4.22222 3.12741 4.43333 2.39382 4.43333H2.37452C1.66666 4.43333 1.09396 4.22222 0.656371 3.8C0.218784 3.37777 0 2.84679 0 2.20707ZM0.250965 19V6.17979H4.53668V19H0.250965ZM6.9112 19H11.1969V11.8414C11.1969 11.3936 11.2484 11.0481 11.3514 10.805C11.5315 10.37 11.805 10.0022 12.1718 9.7015C12.5386 9.40082 12.9987 9.25049 13.5521 9.25049C14.9936 9.25049 15.7143 10.2165 15.7143 12.1485V19H20V11.6495C20 9.75587 19.5496 8.31969 18.6486 7.3409C17.7477 6.36211 16.5573 5.87272 15.0772 5.87272C13.417 5.87272 12.1236 6.58282 11.1969 8.00302V8.0414H11.1776L11.1969 8.00302V6.17979H6.9112C6.93693 6.58921 6.94981 7.86227 6.94981 9.99898C6.94981 12.1357 6.93693 15.136 6.9112 19Z"
                fill="#003F63"
              />
            </g>
            <defs>
              <clipPath id="clip0_203_112">
                <rect width="20" height="19" fill="white" />
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
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.47833 0 0 4.4775 0 10C0 14.4183 2.865 18.1667 6.83917 19.4892C7.33833 19.5817 7.5 19.2717 7.5 19.0083V17.1467C4.71833 17.7517 4.13917 15.9667 4.13917 15.9667C3.68417 14.8108 3.02833 14.5033 3.02833 14.5033C2.12083 13.8825 3.0975 13.8958 3.0975 13.8958C4.10167 13.9658 4.63 14.9267 4.63 14.9267C5.52167 16.455 6.96917 16.0133 7.54 15.7575C7.62917 15.1117 7.88833 14.67 8.175 14.4208C5.95417 14.1667 3.61917 13.3092 3.61917 9.47833C3.61917 8.38583 4.01 7.49417 4.64917 6.79417C4.54583 6.54167 4.20333 5.52417 4.74667 4.1475C4.74667 4.1475 5.58667 3.87917 7.4975 5.1725C8.295 4.95083 9.15 4.84 10 4.83583C10.85 4.84 11.7058 4.95083 12.505 5.1725C14.4142 3.87917 15.2525 4.1475 15.2525 4.1475C15.7967 5.525 15.4542 6.5425 15.3508 6.79417C15.9925 7.49417 16.38 8.38667 16.38 9.47833C16.38 13.3192 14.0408 14.165 11.8142 14.4125C12.1725 14.7225 12.5 15.3308 12.5 16.2642V19.0083C12.5 19.2742 12.66 19.5867 13.1675 19.4883C17.1383 18.1642 20 14.4167 20 10C20 4.4775 15.5225 0 10 0Z"
              fill="#003F63"
            />
          </svg>
        </a>

        <a
          href="https://twitter.com/ayakamiyake7"
          target="_blank"
          rel="noopener"
          className="ml-4"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_203_116)">
              <path
                d="M6.28969 19.9434C13.8373 19.9434 17.9645 12.2938 17.9645 5.66166C17.9645 5.44447 17.9645 5.22775 17.9528 5.01228C18.7561 4.30182 19.4495 3.42166 20 2.41338C19.2516 2.81994 18.4577 3.08603 17.6441 3.20447C18.5003 2.57635 19.1413 1.58947 19.447 0.427284C18.6414 1.01213 17.76 1.42416 16.8408 1.64619C15.5695 -0.00787218 13.5486 -0.413185 11.9116 0.658691C10.2753 1.73057 9.43 4.01182 9.84922 6.22385C6.55031 6.02182 3.47594 4.1151 1.39297 0.979784C0.302031 3.27197 0.857344 6.20682 2.65969 7.68135C2.01156 7.65447 1.37734 7.43838 0.810938 7.0515V7.11557C0.810938 9.50197 2.18375 11.559 4.09531 12.0362C3.49752 12.2371 2.85537 12.2665 2.24172 12.121C2.77875 14.167 4.31938 15.5695 6.07531 15.6098C4.62141 17.0032 2.82641 17.7582 0.978906 17.7535C0.651719 17.7535 0.324531 17.7301 -0.000156403 17.6839C1.87609 19.1578 4.05922 19.9403 6.28953 19.9373"
                fill="#003F63"
              />
            </g>
            <defs>
              <clipPath id="clip0_203_116">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>

        <a
          href="mailto:ayakamiyake7@gmail.com"
          target="_blank"
          rel="noopener"
          className="ml-4"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.6 1.6001C3.39546 1.6001 1.6 3.39556 1.6 5.6001V14.4001C1.6 16.6046 3.39546 18.4001 5.6 18.4001H14.4C16.6045 18.4001 18.4 16.6046 18.4 14.4001V5.6001C18.4 3.39556 16.6045 1.6001 14.4 1.6001H5.6ZM5.2 6.4001H14.8C14.872 6.4001 14.9399 6.40822 15.0039 6.42822L11.0719 10.3563C10.4799 10.9483 9.51622 10.9483 8.92422 10.3563L4.99609 6.42822C5.06009 6.40822 5.128 6.4001 5.2 6.4001ZM4.42812 6.99619L7.43594 10.0001L4.42812 13.004C4.40812 12.94 4.4 12.8721 4.4 12.8001V7.2001C4.4 7.1281 4.40812 7.06019 4.42812 6.99619ZM15.5719 6.99619C15.5919 7.06019 15.6 7.1281 15.6 7.2001V12.8001C15.6 12.8721 15.5919 12.94 15.5719 13.004L12.5602 10.0001L15.5719 6.99619ZM8 10.5642L8.35625 10.9243C8.80825 11.3763 9.40409 11.6001 9.99609 11.6001C10.5921 11.6001 11.1839 11.3763 11.6359 10.9243L11.9961 10.5642L15.0039 13.572C14.9399 13.592 14.872 13.6001 14.8 13.6001H5.2C5.128 13.6001 5.06009 13.592 4.99609 13.572L8 10.5642Z"
              fill="#003F63"
            />
          </svg>
        </a>
      </div>
      <p className="text-xs text-gray-400 tracking-widest text-center">
        &copy; 2022 Ayaka Miyake All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;