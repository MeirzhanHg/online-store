import { ReactComponent as TruckIcon } from "assets/img/icons/truck.svg";
import { ReactComponent as HeadphoneIcon } from "assets/img/icons/headphone.svg";
import { ReactComponent as SecurityIcon } from "assets/img/icons/security.svg";

export const deliveryItems = [
  {
    icon: <TruckIcon />,
    title: "БЕСПЛАТНАЯ И БЫСТРАЯ ДОСТАВКА",
    description: "Бесплатная доставка для всех заказов свыше $140",
  },
  {
    icon: <HeadphoneIcon />,
    title: "24/7 СЛУЖБА КЛИЕНТА",
    description: "Дружелюбная круглосуточная поддержка клиентов",
  },
  {
    icon: <SecurityIcon />,
    title: "ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ",
    description: "Мы возвращаем деньги в течение 30 дней",
  },
];