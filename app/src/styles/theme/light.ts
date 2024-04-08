import {createTheme, PaletteOptions, ThemeOptions} from "@mui/material/styles";
import { common } from "@mui/material/colors";
import {TypographyOptions} from "@mui/material/styles/createTypography";
import { blueJeans } from "@/styles/colors";
import { spaceCadet } from "@/styles/colors";
import { rajah } from "@/styles/colors";
import { calPolyPomonaGreen } from "@/styles/colors";

const colorPrimary = spaceCadet;
const colorSecondary = rajah;

declare module '@mui/material/styles' {
    interface PaletteColor {
      background: string;
      gradientMain: string;
      gradientLight: string;
      gradientHeader: string;
    }

    interface SimplePaletteColorOptions {
      background?: string;
      gradientMain?: string;
      gradientLight?: string;
      gradientHeader?: string;
    }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    tag: true;
    new: true;
  }
}

const typographyOptions: TypographyOptions = {
    h1: {
        fontSize: '5rem',
        fontFamily: 'greycliff-bold'
    },
    h2: {
        fontSize: '4rem',
        fontFamily: 'greycliff-bold'
    },
    h4: {
        fontSize: '2.5rem',
        fontFamily: 'greycliff-demibold'
    },
    h5: {
        fontSize: '2rem',
        fontFamily: 'greycliff-demibold'
    },
    h6: {
        fontSize: '1rem',
        fontFamily: 'greycliff-medium'
    },
    body1: {
        fontSize: '1rem',
        fontFamily: 'greycliff-regular',
        textAlign: 'justify',
    },
    body2: {
        fontSize: '2rem',
        fontFamily: 'greycliff-regular',
        textAlign: 'justify',
    }
}

const paletteOptions: PaletteOptions = {
    mode: "light",
    primary: {
      background: colorPrimary[10],
      main: colorPrimary[900],
      light: colorPrimary[900],
      gradientMain: `linear-gradient(120deg, ${colorPrimary[200]} 0%, ${colorPrimary[400]} 50%,  ${colorPrimary[700]} 75%, ${colorPrimary[900]} 100%)`,
      gradientLight: `linear-gradient(90deg, ${colorPrimary[200]} 0%, ${colorPrimary[500]} 50%,  ${colorPrimary[700]} 75%, ${colorPrimary[900]} 100%)`,
      gradientHeader: `linear-gradient(144deg, ${colorPrimary[200]} 0%, ${colorPrimary[300]} 50%,  ${colorPrimary[500]} 85%, ${colorPrimary[800]} 100%)`,
    },
    secondary: {
      background: colorSecondary[10],
      main: colorSecondary[300],
      light: colorSecondary[900],
      gradientMain: `linear-gradient(120deg, ${colorSecondary[100]} 0%, ${colorSecondary[300]} 50%,  ${colorSecondary[400]} 75%, ${colorSecondary[800]} 100%)`,
      gradientLight: `linear-gradient(90deg, ${colorSecondary[200]} 0%, ${colorSecondary[500]} 50%,  ${colorSecondary[700]} 75%, ${colorSecondary[900]} 100%)`,
      gradientHeader: `linear-gradient(144deg, ${colorSecondary[200]} 0%, ${colorSecondary[300]} 50%,  ${colorSecondary[500]} 85%, ${colorSecondary[800]} 100%)`,
    },
    success: {
        main: calPolyPomonaGreen[700],
    },
    warning: {
        main: rajah[700],
    },
    info: {
        main: blueJeans[700],
    },
    background: {
        default: common.white,
    }
}

const options: ThemeOptions = {
    palette: paletteOptions,
    typography: typographyOptions,
};

let theme = createTheme(options);

theme = createTheme(theme,{
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.title': {
                        fontFamily: 'greycliff-bold',
                        fontSize: '1rem',
                    },
                    '&.tag, &.date, &.subheader': {
                        fontSize: '0.8rem',
                    },
                    '&.static-info-link-text': {
                        fontSize: '0.8rem',
                        color: colorPrimary[700],
                        fontFamily: 'greycliff-regular',
                    },
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    '&.user-stripe-link, &.router-link': {
                        color: theme.palette.primary.main,
                        textDecoration: 'none',
                        fontSize: '0.89rem',
                        fontFamily: 'greycliff-demibold',
                    },
                    '&.list-title-link': {
                        color: theme.palette.secondary.main,
                    },
                    '&.list-item-link': {
                      textAlign: 'left',
                    },
                    '&.static-info-link-item.router-link': {
                      marginBottom: '0.55rem',
                      marginRight: '0.8rem',
                    },
                    '&.last': {
                      marginRight: '0 !important',
                      '&::last-child': {
                        content: '"" !important',
                        marginRight: '0 !important',
                      }
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'greycliff-demibold',
                },
                containedPrimary: {
                    borderColor: theme.palette.primary.main,
                    transition: 'background 0.5s cubic-bezier(.29, 1.01, 1, -0.68)',
                    '&:hover': {
                        color: common.white,
                        background: theme.palette.primary.gradientLight,
                    },
                }
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'greycliff-demibold',
                    transition: 'background 0.5s cubic-bezier(.29, 1.01, 1, -0.68)',
                    background: 'none',
                    marginLeft: 4,
                    marginRight: 4,
                    p: 0,
                    '&:hover': {
                        color: common.white,
                        background: theme.palette.secondary.main,
                        boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
                    },
                    '&:active': {
                        color: common.white,
                        background: theme.palette.secondary.main,
                        boxShadow: 'none',
                    },
                }
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    fontFamily: 'greycliff-demibold',
                    background: common.white,
                    boxShadow: `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;`,
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: common.white,
                    boxShadow: `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;`,
                    '&.post-card': {
                        boxShadow: 'none',
                    }
                }
            }
        },
        MuiCardHeader: {
          styleOverrides: {
            root: {
              padding: '8px 0',
              boxShadow: `none`,
              '&.post-header': {
                  boxShadow: 'none',
              },
            }
          }
        },
        MuiCardContent: {
          styleOverrides: {
            root: {
              padding: '8px 0',
              fontSize: '1rem',
              '&:last-child': {
                paddingBottom: '13px',
              }
            }
          }
        },
        MuiCardAction: {
            styleOverrides: {
                root: {
                    background: 'none',
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    fontFamily: 'greycliff-demibold',
                    paddingBottom: 0,
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                  // boxShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
                  boxShadow: `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;`,
                  background: common.white,
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    fontFamily: 'greycliff-demibold',
                    color: theme.palette.secondary.main,
                },
                colorPrimary: {
                    '&.Mui-checked': {
                        color: theme.palette.secondary.main,
                    },
                },
                colorSecondary: {
                    '&.Mui-checked': {
                        color: theme.palette.primary.main,
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontFamily: 'greycliff-demibold',
                    color: theme.palette.primary.main,
                    '.MuiTableCell-body .MuiLink-root &:hover': {
                        color: theme.palette.secondary.background,
                    },
                    '.MuiTableCell-body .MuiLink-root &': {
                        marginBottom: '-0.4rem',
                    },
                },
            },
        },
        MuiAvatar: {
          styleOverrides: {
            root: {
              '&.avatar-drop-shadow': {
                filter: `drop-shadow(13px 21px 13px ${colorSecondary[900]})`,
              },
              '&.avatar-navigation-logo': {
                width: '45px',
                height: '45px',
                bgcolor: 'none',
                borderRadius: 0,
              },
              '&.user-stripe-avatar': {
                width: '34px',
                height: '34px',
                marginRight: '8px',
                fontSize: '0.8rem',
                borderRadius: '100%',
              },
              '&.user-info-block-avatar': {
                width: '89px',
                height: '89px',
                borderRadius: '100%',
              },
            },
          },
        },
        MuiTableRow: {
          styleOverrides: {
            root: {
                "&:last-child .MuiTableCell-root": {
                    borderBottom: 'none',
                }
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              fontFamily: 'greycliff-demibold',
              padding: '8px 3px',
              textAlign: 'center',
              color: theme.palette.primary.main,
              '&.MuiTableCell-head': {
                fontSize: '0.8rem',
                color: theme.palette.secondary.main,
              },
              '&.MuiTableCell-body': {
                fontSize: '0.8rem',
              },
            },
          },
        },
        MuiTabPanel: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                  minHeight: '21px',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                  minHeight: 0,
                  minWidth: 0,
                  fontSize: '0.8rem',
                  padding: '3px 8px',
                  "&:first-child": {
                    paddingLeft: 0,
                  },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: '4px',
                boxShadow: `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;`,
                "&.MuiChip-tag .MuiChip-label::before": {
                  content: '"#"',
                },
                "&.MuiChip-new": {
                  height: 'auto',
                  fontSize: '0.55rem',
                  marginLeft: '3px',
                },
                "&.MuiChip-new .MuiChip-label": {
                  padding: '3px',
                  lineHeight: 1,
                  fontSize: '0.55rem',
                  fontFamily: 'greycliff-bold',
                }
              },
              colorSuccess: {
                background: theme.palette.success.main,
                color: common.white,
              },
              colorSecondary: {
                background: theme.palette.secondary.background,
                color: theme.palette.primary.main,
              },
              "&.MuiChip-colorSecondary .MuiChip-deleteIcon": {
                color: colorPrimary[200],
              },
              "&.MuiChip-colorSecondary .MuiChip-deleteIcon:hover": {
                color: colorPrimary[900],
              },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                  padding: '0 8px',
                  background: common.white,
                },
            },
        },
    },
})

export { theme };
