// este arquivo serve para sobrescrever quando tiver qualquer aquivo que termine com png

declare module '*.png' {
const content: any;
export default content;
}