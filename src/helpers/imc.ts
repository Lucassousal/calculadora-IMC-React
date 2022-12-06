export type Classification = {
  title: string;
  color: string;
  icon: "down" | "up";  //na tipagem utiliza-se ´so um | 
  imc: number[];
  message:string;
  youIMC?:number;
  idealWeightLow?:number;
  idealWeightHigh?:number;
};

export const classification: Classification[] = [
  { title: "Baixo peso", color: "#96A3AB", icon: "down", imc: [0, 18.4],message:"Considere adotar hábitos alimentares melhores, aliando sempre com a prática de exercicio físico regular para ganhar peso." },
  { title: "Peso normal", color: "#0EAD69", icon: "up", imc: [18.5, 24.9],message:"Parabéns você está na faixa de peso adequada!" },
  { title: "Sobrepeso", color: "#E2B039", icon: "down", imc: [25.0, 29.9],message:"Considere adotar hábitos alimentares melhores, aliando sempre com a prática de exercicio físico regular para perder peso." },
  { title: "Obesidade I", color: "#c3423f", icon: "down", imc: [30.0, 34.9],message:"Considere adotar hábitos alimentares melhores, aliando sempre com a prática de exercicio físico regular para perder peso." },
  { title: "Obesidade II", color: "#c02623", icon: "down", imc: [35.0, 39.9],message:"Considere adotar hábitos alimentares melhores, aliando sempre com a prática de exercicio físico regular para perder peso." },
  { title: "Obesidade III", color: "#c41310", icon: "down", imc: [40.0, 99.9],message:"Considere adotar hábitos alimentares melhores, aliando sempre com a prática de exercicio físico regular para perder peso." }
];

export const calculateIMC = (weight:number, height:number) => {
  const imc = Number((weight / (height * height)).toFixed(1));
  const idealWeightLow = Number((18.5*(height*height)).toFixed(1));
  const idealWeightHigh = Number((24.99*(height*height)).toFixed(1));

  for(let i in classification){
    if(imc >= classification[i].imc[0] && imc <= classification[i].imc[1]){
      
      let classificationCopy:Classification = {...classification[i]};
      
      classificationCopy.youIMC = imc;
      classificationCopy.idealWeightLow = idealWeightLow;
      classificationCopy.idealWeightHigh = idealWeightHigh;
      return classificationCopy;
    }
  }

  return null;
};

// for in recebe o nome da propriedade ou o index
// for of recebe o valor da propriedade ou elemento