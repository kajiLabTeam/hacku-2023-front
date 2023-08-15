import { SVGProps } from "react";

export function PlayerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 51" {...props}>
      <path d="M43.29,51H7.71c-4.25,0-7.71-3.46-7.71-7.71V7.71C0,3.46,3.46,0,7.71,0H43.29c4.25,0,7.71,3.46,7.71,7.71V43.29c0,4.25-3.46,7.71-7.71,7.71ZM7.71,5c-1.49,0-2.71,1.21-2.71,2.71V43.29c0,1.49,1.21,2.71,2.71,2.71H43.29c1.49,0,2.71-1.21,2.71-2.71V7.71c0-1.49-1.21-2.71-2.71-2.71H7.71Z" />
      <path d="M19.39,33.24v-15.49c0-.81,.67-1.47,1.48-1.46,.26,0,.52,.07,.75,.21l13.27,7.71c.7,.41,.94,1.31,.54,2.01-.13,.22-.31,.41-.54,.54l-13.27,7.74c-.7,.42-1.6,.19-2.02-.51-.13-.23-.21-.48-.21-.75Z" />
    </svg>
  );
}

export function PostAddIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 61.18 61.18"
      {...props}
    >
      <path d="M48.3,32.2c-1.77,0-3.22,1.45-3.22,3.22v16.81c0,1.77-1.45,3.22-3.22,3.22H9.66c-1.77,0-3.22-1.45-3.22-3.22V19.32c0-1.77,1.45-3.22,3.22-3.22H25.76c1.77,0,3.22-1.45,3.22-3.22s-1.45-3.22-3.22-3.22H6.44c-3.54,0-6.44,2.9-6.44,6.44V54.74c0,3.54,2.9,6.44,6.44,6.44H45.08c3.54,0,6.44-2.9,6.44-6.44v-19.32c0-1.77-1.45-3.22-3.22-3.22Zm9.73-22.54h-6.5V3.16c0-1.74-1.42-3.16-3.16-3.16h-.1c-1.77,0-3.19,1.42-3.19,3.16v6.5h-6.47c-1.74,0-3.16,1.42-3.19,3.16v.1c0,1.77,1.42,3.19,3.19,3.19h6.47v6.47c0,1.74,1.42,3.19,3.19,3.16h.1c1.74,0,3.16-1.42,3.16-3.16v-6.47h6.5c1.74,0,3.16-1.42,3.16-3.16v-.13c0-1.74-1.42-3.16-3.16-3.16Z" />
      <path d="M35.42,22.54H16.1c-1.77,0-3.22,1.45-3.22,3.22s1.45,3.22,3.22,3.22h19.32c1.77,0,3.22-1.45,3.22-3.22s-1.45-3.22-3.22-3.22Zm0,9.66H16.1c-1.77,0-3.22,1.45-3.22,3.22s1.45,3.22,3.22,3.22h19.32c1.77,0,3.22-1.45,3.22-3.22s-1.45-3.22-3.22-3.22Zm0,9.66H16.1c-1.77,0-3.22,1.45-3.22,3.22s1.45,3.22,3.22,3.22h19.32c1.77,0,3.22-1.45,3.22-3.22s-1.45-3.22-3.22-3.22Z" />
    </svg>
  );
}

export function AccountCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 61.53 61.53"
      {...props}
    >
      <path d="M11.84,46.46c2.62-2,5.54-3.58,8.77-4.73,3.23-1.15,6.61-1.73,10.15-1.73,3.54,0,6.92,.58,10.15,1.73s6.15,2.73,8.77,4.73c1.79-2.1,3.19-4.49,4.19-7.15s1.5-5.51,1.5-8.54c0-6.82-2.4-12.63-7.19-17.42-4.79-4.8-10.6-7.19-17.42-7.19-6.82,0-12.63,2.4-17.42,7.19s-7.19,10.6-7.19,17.42c0,3.03,.5,5.87,1.5,8.54,1,2.67,2.4,5.05,4.19,7.15Zm18.92-12.61c-3.03,0-5.58-1.04-7.65-3.11-2.08-2.08-3.12-4.63-3.11-7.65,0-3.03,1.04-5.58,3.11-7.65,2.08-2.08,4.63-3.12,7.65-3.11,3.03,0,5.58,1.04,7.65,3.11,2.08,2.08,3.12,4.63,3.11,7.65,0,3.03-1.04,5.58-3.11,7.65-2.08,2.08-4.63,3.12-7.65,3.11Zm0,27.69c-4.26,0-8.26-.81-12-2.42-3.74-1.62-7-3.81-9.77-6.57-2.77-2.77-4.96-6.03-6.57-9.77C.81,39.02,0,35.02,0,30.77c0-4.26,.81-8.26,2.42-12,1.62-3.74,3.81-7,6.57-9.77,2.77-2.77,6.03-4.96,9.77-6.57C22.51,.81,26.51,0,30.77,0c4.26,0,8.26,.81,12,2.42,3.74,1.62,7,3.81,9.77,6.57,2.77,2.77,4.96,6.03,6.58,9.77,1.62,3.74,2.42,7.74,2.42,12,0,4.26-.81,8.26-2.42,12-1.62,3.74-3.81,7-6.57,9.77-2.77,2.77-6.03,4.96-9.77,6.58-3.74,1.62-7.74,2.42-12,2.42Z" />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57.04 57.04"
      {...props}
    >
      <path d="M52.6,57.04l-19.96-19.96c-1.58,1.27-3.41,2.27-5.47,3.01-2.06,.74-4.25,1.11-6.58,1.11-5.76,0-10.63-1.99-14.62-5.98C2,31.22,0,26.35,0,20.6,0,14.84,1.99,9.97,5.98,5.98,9.97,2,14.84,0,20.6,0c5.76,0,10.63,1.99,14.62,5.98,3.99,3.99,5.98,8.86,5.98,14.62,0,2.32-.37,4.52-1.11,6.58-.74,2.06-1.74,3.88-3.01,5.47l19.96,19.96-4.44,4.44ZM20.6,34.86c3.96,0,7.33-1.39,10.1-4.16s4.16-6.14,4.16-10.1c0-3.96-1.39-7.33-4.16-10.1-2.77-2.77-6.14-4.16-10.1-4.16-3.96,0-7.33,1.39-10.1,4.16s-4.16,6.14-4.16,10.1c0,3.96,1.39,7.33,4.16,10.1s6.14,4.16,10.1,4.16Z" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33.65 51.03"
      {...props}
    >
      <rect
        style={{ fill: "#231815" }}
        x=".41"
        y="38.06"
        width="22.9"
        height="3"
        transform="translate(-29.4 41.35) rotate(-75.79)"
      />
      <path
        style={{ fill: "#d20a3c" }}
        d="M29.7,28.53c-.79-4.98-.21-14.18,2.44-18.14,.79-.37,1.31-.86,1.46-1.48,.63-2.48-4.74-5.97-12-7.81C14.35-.74,7.96-.22,7.33,2.26c-.16,.62,.06,1.3,.58,2,.44,4.74-3.43,13.11-6.49,17.12-.74,.4-1.21,.92-1.37,1.54-.72,2.84,5.44,6.85,13.75,8.95,8.31,2.1,15.64,1.51,16.36-1.33,.16-.62-.02-1.3-.47-2.01Z"
      />
    </svg>
  );
}
