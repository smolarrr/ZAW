﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('Inter-normal.ttf', font);
this.addFont('Inter-normal.ttf', 'Inter', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])