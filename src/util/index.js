//@flow
import carrierData from './_carrierData';
import logo from './logo.png';

export function getCarrierName(abbr: string): string {
  return carrierData[abbr] || abbr;
}

export function getCarrierIcon(abbr: string): string {
  return `${logo}?airline=${abbr}`;
}
