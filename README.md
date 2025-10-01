# 🍔 Sistema de Descontos - McDonald's  

Este projeto é um **sistema simples de cálculo de descontos** utilizando o **Padrão Strategy** em JavaScript, simulando descontos aplicados em pedidos do McDonald's.  

O sistema conta com uma interface moderna em HTML/CSS e uma lógica de cálculo implementada em **JavaScript orientado a objetos**.  

## 🚀 Funcionalidades  

- Entrada do valor do pedido.  
- Seleção do tipo de desconto:  
  - 🚫 **Sem desconto**  
  - 🎓 **Desconto Estudante**: 15% para pedidos acima de R$ 29,90  
  - 👴 **Desconto Idoso**: 20% sem valor mínimo  
  - 🎂 **Desconto Aniversário**: R$ 10,00 em pedidos acima de R$ 25,00  
- Exibição do valor final atualizado e formatado em **R$ (BRL)**.  
- Interface responsiva, moderna e com animações.  
- Suporte ao uso da tecla **Enter** para calcular rapidamente.  

## 🛠️ Tecnologias Utilizadas  

- **HTML5**  
- **CSS3** 
- **JavaScript**  

## 📖 Padrão de Projeto Utilizado  

O projeto utiliza o **Strategy Pattern**, onde cada tipo de desconto é implementado como uma estratégia independente:  

- `DescontoEstudante`  
- `DescontoIdoso`  
- `DescontoAniversario`  
- `SemDesconto`  

Isso torna o código mais flexível e fácil de manter.  



