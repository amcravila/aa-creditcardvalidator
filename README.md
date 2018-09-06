# Validador de dados de cartão de crédito v.1.0.3

**Esta biblioteca se destina a validação de dados de cartão de crédito, para uso em aplicações web.**
Na versão atual, efetua a validação de número de cartão de crédito, retornando **TRUE** para Número de cartão VÁLIDO OU **FALSE** para Número de cartão INVÁLIDO.


## Os métodos utilizados na biblioteca são:

#### **cardValidator(num);**

Exemplo de uso:

```
$node
> let cardValidator = require("aa-creditcardvalidator")
> cardValidator(cardNumber); //'true' OU 'false'
```


## versão 1.0.3

- funcionalidades: validação de número de cartão de crédito


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm i aa-creditcardvalidator` OU `$npm install aa-creditcardvalidator --save`


## roadmap oficial do projeto

#### versão 3.0.0 (sem previsão, aceita-se contribuições)
- Validação de demais dados de cartão de crédito: nome, data de validade e CVV

#### versão 2.0.0 (previsão dezembro/2018)
- README em inglês

#### versão 1.0.3 (released)
- funcionalidades: validação de número de cartão de crédito
