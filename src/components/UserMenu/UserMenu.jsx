import { Stack, IconButton } from "@mui/material";
// import Badge from "@mui/material/Badge";
import { Badge } from "@mui/base/Badge";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { buildActiveIconLinkClassname } from "./buildClasses";
import { useSelector } from "react-redux";
import { selectFavoriteProducts} from "../../redux/products/selectors";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const favProducts = useSelector(selectFavoriteProducts);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton>
        <NavLink
          className={({ isActive }) => buildActiveIconLinkClassname(isActive)}
          to="/favoriteProductsPage"
        >
          <Badge
            badgeContent={favProducts.length}
            slotProps={{ badge: { className: css.badge } }}
            showZero
          >
            <CiHeart className={css.icon} />
          </Badge>
        </NavLink>
      </IconButton>
      <NavLink
        className={({ isActive }) => buildActiveIconLinkClassname(isActive)}
        to="/CartPage"
      >
        <CiShoppingCart className={css.icon} />
      </NavLink>
      <NavLink>
        <CiLogout className={css.icon} />
      </NavLink>
    </Stack>
  );
};

export default UserMenu;
