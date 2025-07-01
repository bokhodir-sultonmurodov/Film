import logo from "../../public/vite.svg"
import app from "@/assets/image 8.png"
import store from "@/assets/image 7.png"
const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 dark:bg-[#111111] dark:text-white py-10 mt-[100px]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <img src={logo} alt="Logo" className=" mb-4" />
          <div>
            <img
              src={app}  alt="Google Play"
              className="w-36 mb-2"
            />
          </div>
          <div>
            <img src={store} alt="App Store" className="w-36" />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg text-[#FFFFFF] font-semibold mb-4">О нас</h3>
          <div className="space-y-2 text-[#A1A1A1]">

          <p className="hover:underline cursor-default">Публичная оферта</p>
          <p className="hover:underline cursor-default">Реклама</p>
          <p className="hover:underline cursor-default">F.A.Q</p>
          <p className="hover:underline cursor-default">Контакты</p>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-4">Категории</h3>
          <div className="space-y-2 text-[#A1A1A1]">

          <p className="hover:underline cursor-default">Кино</p>
          <p className="hover:underline cursor-default">Театр</p>
          <p className="hover:underline cursor-default">Концерты</p>
          <p className="hover:underline cursor-default">Спорт</p>
          </div>
        </div>

        {/* Contact & social */}
        <div className="flex flex-col space-y-2 dark:text-[#A1A1A1]">
          <h3 className="text-lg font-semibold">Связаться с нами</h3>
          <p
            className="font-medium dark:text-[#C61F1F]  dark:decoration-0-[#C61F1F] dark:pb-0.5 cursor-default"
            style={{ textDecoration: "underline" }}
          >
            +998 (95) 897-33-38
          </p>

          <h3 className="text-lg font-semibold mt-6">Социальные сети</h3>
          <div className="flex space-x-4 mt-2 text-gray-700 dark:text-[#A1A1A1] text-xl">
            {/* Icons shu yerda qoladi */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
