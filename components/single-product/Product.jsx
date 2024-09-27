"use client";

import Breadcrumb from "../utils/Breadcrumb";
import Modal from "../modal/Modal";
import Section from "../utils/Section";
import ProductInfo from "./ProductInfo";
import ProductImageSlider from "./ProductImageSlider";
import SizeChart from "./SizeChart";
import { useState } from "react";
import ProductMobileMenu from "./ProductMobileMenu";
import CustomHeader from "../utils/CustomHeader";
import ProductFavoriteButton from "./ProductFavoriteButton";
import AddedToCartModal from "./AddedToCartModal";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "@/lib/features/wishlist/wishlistSlice";

const Product = ({ product }) => {
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(product[0].sizes[0]);

  const dispatch = useDispatch();

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleShowSizeModal = () => {
    setShowSizeModal(true);
  };

  const handleHideSizeModal = () => {
    setShowSizeModal(false);
  };

  const handleHideCartModal = () => {
    setShowCartModal(false);
  };

  const handleAddProduct = (product) => {
    setAddedProduct(product);
    setShowCartModal(true);
  };

  const handleAddToWishlist = (id, name, image, price, size) => {
    dispatch(addToWishlist({ id, name, image, price, size }));
  };

  return (
    <>
      <Modal
        handleCloseModal={handleHideCartModal}
        isOpen={showCartModal}
        cln="lg:!h-[25rem] !h-[21.5rem] medium-shadow rounded-[5px] overflow-hidden !w-[90vw] lg:!w-[30rem] right-[1.7rem] 3xl:right-[2rem] md:right-[2rem] !left-auto px-[1rem]"
      >
        <AddedToCartModal
          handleClose={handleHideCartModal}
          addedProduct={addedProduct}
        />
      </Modal>
      <CustomHeader
        title="Sneaker"
        rightButton={
          <ProductFavoriteButton
            id={product[0].id}
            handleAddToWishlist={() =>
              handleAddToWishlist(
                product[0].id,
                product[0].name,
                product[0].images[0],
                product[0].price,
                selectedSize
              )
            }
          />
        }
      />
      <Section cln="lg:pt-[8rem] lg:pb-[12rem] !my-0 !lg:my-[3rem] !px-0">
        <Breadcrumb />
        <div className="flex flex-col lg:flex-row w-full single-product">
          <ProductImageSlider
            images={product[0]?.images}
            id={product[0].id}
            handleAddToWishlist={() =>
              handleAddToWishlist(
                product[0].id,
                product[0].name,
                product[0].images[0],
                product[0].price,
                selectedSize
              )
            }
          />

          <ProductInfo
            product={product[0]}
            handleShowModal={handleShowSizeModal}
            handleAddProduct={handleAddProduct}
            selectedSize={selectedSize}
            handleSizeChange={handleSizeChange}
          />
        </div>

        <Modal
          handleCloseModal={handleHideSizeModal}
          isOpen={showSizeModal}
          cln="lg:!h-[90vh] medium-shadow rounded-[5px] overflow-hidden !w-[90vw] lg:!w-[55rem] left-[1.7rem] 3xl:left-[27%] md:left-[20.5%]"
        >
          <SizeChart handleHideModal={handleHideSizeModal} />
        </Modal>
      </Section>
      <ProductMobileMenu
        product={product[0]}
        handleAddProduct={handleAddProduct}
        selectedSize={selectedSize}
      />
    </>
  );
};

export default Product;
