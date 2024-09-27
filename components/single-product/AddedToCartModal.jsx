import { useSelector } from "react-redux";
import PrimaryButton from "../buttons/PrimaryButton";
import ModalHeader from "../modal/ModalHeader";
import AddedToCartItem from "./AddedToCartItem";
import { getCartLength } from "@/lib/features/cart/cartSlice";

const AddedToCartModal = ({ handleClose, addedProduct }) => {
  const cartLength = useSelector(getCartLength);

  return (
    <div>
      <ModalHeader title="Added to cart" handleClose={handleClose} />
      {addedProduct && <AddedToCartItem product={addedProduct} />}
      <PrimaryButton cln="mt-[3rem] w-full uppercase" isLink={true} url="/cart">
        View cart ({cartLength}) & checkout
      </PrimaryButton>
    </div>
  );
};

export default AddedToCartModal;
