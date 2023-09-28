import {createContext} from 'react';

const FamilySharing = createContext();

let FamilyProvider = FamilySharing.Provider;
let FamilyConsumer = FamilySharing.Consumer;

export {FamilyProvider, FamilyConsumer}

