import { ComputerDirector, GamingComputerBuilder } from "@/types/Builder";

const gamingBuilder = new GamingComputerBuilder();
new ComputerDirector(gamingBuilder);

const gamingComputer = gamingBuilder.GetResults();

gamingComputer.displayInfo();
