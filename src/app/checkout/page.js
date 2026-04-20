import Cart from "../ui/Cart";
import Modal from "../ui/Modal";

export const metadata = {
  title: "Checkout | Agora",
  description: `Complete your purchase securely on Agora.
  Review your items, enter paymenet details, and confirm your order.`,
};
export default function CheckoutPage() {
  return (
    <Modal>
      <Cart />
    </Modal>
  );
}
