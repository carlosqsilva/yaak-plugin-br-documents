"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  plugin: () => plugin
});
module.exports = __toCommonJS(src_exports);

// src/generators.ts
var initialArray = (total, number) => {
  return Array.from(Array(total), () => numberRandom(number));
};
var numberRandom = (number) => Math.round(Math.random() * number);
var mod = (dividend, divider) => {
  return Math.round(dividend - Math.floor(dividend / divider) * divider);
};
var generateCPF = (masked) => {
  const total = 9;
  const number = 9;
  const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = initialArray(total, number);
  let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - mod(d1, 11);
  if (d1 >= 10) d1 = 0;
  let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - mod(d2, 11);
  if (d2 >= 10) d2 = 0;
  if (masked) {
    return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
  }
  return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
};
var generateCNPJ = (masked) => {
  const total = 8;
  const number = 9;
  const [n1, n2, n3, n4, n5, n6, n7, n8] = initialArray(total, number);
  const n9 = 0;
  const n10 = 0;
  const n11 = 0;
  const n12 = 1;
  let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
  d1 = 11 - mod(d1, 11);
  if (d1 >= 10) d1 = 0;
  let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
  d2 = 11 - mod(d2, 11);
  if (d2 >= 10) d2 = 0;
  if (masked) {
    return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`;
  }
  return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
};
var generateRG = (masked) => {
  const total = 8;
  const number = 9;
  const [n1, n2, n3, n4, n5, n6, n7, n8] = initialArray(total, number);
  let d1 = n1 * 2 + n2 * 3 + n3 * 4 + n4 * 5 + n5 * 6 + n6 * 7 + n7 * 8 + n8 * 9;
  d1 = 11 - mod(d1, 11);
  if (d1 === 10) d1 = "X";
  else if (d1 >= 10) d1 = 0;
  if (masked) {
    return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}-${d1}`;
  }
  return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${d1}`;
};

// src/index.ts
var plugin = {
  templateFunctions: [
    {
      name: "document.cpf",
      args: [],
      async onRender() {
        return generateCPF(false);
      }
    },
    {
      name: "document.cpf_masked",
      args: [],
      async onRender() {
        return generateCPF(true);
      }
    },
    {
      name: "document.cnpj",
      args: [],
      async onRender() {
        return generateCNPJ(false);
      }
    },
    {
      name: "document.cnpj_masked",
      args: [],
      async onRender() {
        return generateCNPJ(true);
      }
    },
    {
      name: "document.rg",
      args: [],
      async onRender() {
        return generateRG(false);
      }
    },
    {
      name: "document.rg_masked",
      args: [],
      async onRender() {
        return generateRG(true);
      }
    }
  ]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  plugin
});
