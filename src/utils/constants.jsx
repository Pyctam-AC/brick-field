import brickWuhHole from "../pages/PageCatalog/catalogImages/withholes.png";
import brickHollow from "../pages/PageCatalog/catalogImages/hollow.png";
import brickFullbodied from "../pages/PageCatalog/catalogImages/fullbodied.png";
import pallet from "../pages/PageCatalog/catalogImages/pallet.png";

export const catalogList = [
  {
    title: "Кирпич полуторный полнотелый с тех. отверстиями",
    image: brickWuhHole,
    sizes: "250Х120Х88 мм.",
    endurance: "М150/М200",
    frostResistance: "F35/50 циклов",
    voidness: "до 13%",
    thermalConductivity: "",
    density: "",
    quantity: "300 ед.",
    praise: "24,30",
    date: "20.07.2023 г.",
    weight: "4,4-4,6  кг.",
  },
  {
    title: "Кирпич полуторный пустотелый",
    image: brickHollow,
    sizes: "250Х120Х88 мм.",
    endurance: "М100/М125/М150",
    frostResistance: "F35/50 циклов",
    voidness: "до 35%",
    thermalConductivity: "0,26-0,36 Вт/Мс ",
    density: "1100-1600 кг/м3",
    quantity: "300 ед.",
    praise: "18,00",
    date: "20.07.2023 г.",
    weight: "",
  },
  {
    title: "Кирпич одинарный полнотелый",
    image:  brickFullbodied ,
    sizes: "250Х120Х65 мм.",
    endurance: "М125/М150",
    frostResistance: "F35 циклов",
    voidness: "0%",
    thermalConductivity: "0,46 Вт/Мс",
    density: "1100-1600 кг/м3",
    quantity: "400 ед.",
    praise: "18,00",
    date: "20.07.2023 г.",
    weight: "",
  },
  {
    title: "Поддон деревянный",
    image:  pallet ,
    sizes: "",
    endurance: "",
    frostResistance: "",
    voidness: "",
    thermalConductivity: "",
    density: "",
    quantity: "",
    praise: "450,00",
    date: "20.07.2023 г.",
    weight: "",
  },
];

export const KEYS = [
  "Габаритные размеры",
  "Марка прочности",
  "Морозостойкость",
  "Пустотность",
  "Теплопроводность",
  "Средняя плотность",
  " Количество в поддоне",
];
