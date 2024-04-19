import * as React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function Index() {
    const { logout } = React.useContext(UserContext);
    const router = useRouter();

    const goToProfile = () => {
        router.push("/account");
    };

    return (
        <Dropdown>
            <MenuButton>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title id="wish-list-:r0:">compte</title>
                    <path
                        d="M21.6488 19.875C20.2209 17.4065 18.0206 15.6365 15.4528 14.7975C16.723 14.0414 17.7098 12.8892 18.2618 11.5179C18.8137 10.1467 18.9003 8.63211 18.5082 7.20688C18.1161 5.78165 17.267 4.52454 16.0912 3.6286C14.9155 2.73266 13.4782 2.24744 12 2.24744C10.5218 2.24744 9.08451 2.73266 7.90878 3.6286C6.73306 4.52454 5.88394 5.78165 5.49183 7.20688C5.09971 8.63211 5.18629 10.1467 5.73825 11.5179C6.29021 12.8892 7.27704 14.0414 8.5472 14.7975C5.97938 15.6356 3.77907 17.4056 2.35126 19.875C2.2989 19.9604 2.26417 20.0554 2.24912 20.1544C2.23407 20.2534 2.239 20.3544 2.26363 20.4515C2.28825 20.5486 2.33207 20.6397 2.3925 20.7196C2.45293 20.7995 2.52874 20.8664 2.61547 20.9165C2.7022 20.9666 2.79808 20.9988 2.89745 21.0113C2.99683 21.0237 3.0977 21.0161 3.19409 20.989C3.29049 20.9618 3.38047 20.9156 3.45872 20.8531C3.53697 20.7906 3.6019 20.713 3.6497 20.625C5.41595 17.5725 8.53782 15.75 12 15.75C15.4622 15.75 18.5841 17.5725 20.3503 20.625C20.3981 20.713 20.4631 20.7906 20.5413 20.8531C20.6196 20.9156 20.7095 20.9618 20.8059 20.989C20.9023 21.0161 21.0032 21.0237 21.1026 21.0113C21.2019 20.9988 21.2978 20.9666 21.3845 20.9165C21.4713 20.8664 21.5471 20.7995 21.6075 20.7196C21.6679 20.6397 21.7118 20.5486 21.7364 20.4515C21.761 20.3544 21.766 20.2534 21.7509 20.1544C21.7358 20.0554 21.7011 19.9604 21.6488 19.875ZM6.75001 8.99999C6.75001 7.96164 7.05792 6.9466 7.63479 6.08324C8.21167 5.21989 9.03161 4.54698 9.99092 4.14962C10.9502 3.75226 12.0058 3.64829 13.0242 3.85086C14.0426 4.05344 14.9781 4.55345 15.7123 5.28768C16.4465 6.0219 16.9466 6.95736 17.1491 7.97576C17.3517 8.99416 17.2477 10.0498 16.8504 11.0091C16.453 11.9684 15.7801 12.7883 14.9168 13.3652C14.0534 13.9421 13.0384 14.25 12 14.25C10.6081 14.2485 9.27359 13.6949 8.28934 12.7107C7.3051 11.7264 6.7515 10.3919 6.75001 8.99999Z"
                        fill="black"
                    />
                </svg>
            </MenuButton>
            <Menu slots={{ listbox: AnimatedListbox }}>
                <MenuItem onClick={() => goToProfile()}>Profil</MenuItem>
                <MenuItem>Paramètres</MenuItem>
                <MenuItem onClick={() => logout()}>Déconnexion</MenuItem>
            </Menu>
        </Dropdown>
    );
}

const blue = {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#99CCF3",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E6",
    700: "#0059B3",
    800: "#004C99",
    900: "#003A75",
};

const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
};

const Listbox = styled("ul")(
    ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 16px 45px 16px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
      theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  z-index: 1;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `
);

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
    const { ownerState, ...other } = props;
    const popupContext = React.useContext(PopupContext);

    if (popupContext == null) {
        throw new Error(
            "The `AnimatedListbox` component cannot be rendered outside a `Popup` component"
        );
    }

    const verticalPlacement = popupContext.placement.split("-")[0];

    return (
        <CssTransition
            className={`placement-${verticalPlacement}`}
            enterClassName="open"
            exitClassName="closed"
        >
            <Listbox {...other} ref={ref} />
        </CssTransition>
    );
});

AnimatedListbox.propTypes = {
    ownerState: PropTypes.object.isRequired,
};

const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;
  margin: 12px 0;
  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 4px 8px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
        theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }
  `
);
