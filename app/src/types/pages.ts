import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import {PaletteMode} from "@mui/material";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type THeaderProps = {
  mode: PaletteMode;
  toggleColorMode: () => void;
}
