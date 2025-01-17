/**
 * Legacy tool settings can be found in craftables.ts
 */

import Decimal from "decimal.js-light";
import { GameState, Inventory } from "./game";

export type WorkbenchToolName =
  | "Axe"
  | "Pickaxe"
  | "Stone Pickaxe"
  | "Iron Pickaxe"
  | "Rod";

export type TreasureToolName = "Sand Shovel" | "Sand Drill";

export interface Tool {
  name: string;
  description: string;
  ingredients: Inventory;
  sfl: Decimal;
  disabled?: boolean;
}

export const WORKBENCH_TOOLS: (
  gameState?: GameState
) => Record<WorkbenchToolName, Tool> = () => ({
  Axe: {
    name: "Axe",
    description: "Used to collect wood",
    sfl: new Decimal(0.0625),
    ingredients: {},
  },
  Pickaxe: {
    name: "Pickaxe",
    description: "Used to collect stone",
    sfl: new Decimal(0.0625),
    ingredients: {
      Wood: new Decimal(3),
    },
  },
  "Stone Pickaxe": {
    name: "Stone Pickaxe",
    description: "Used to collect iron",
    sfl: new Decimal(0.0625),
    ingredients: {
      Wood: new Decimal(3),
      Stone: new Decimal(5),
    },
  },
  "Iron Pickaxe": {
    name: "Iron Axe",
    description: "Used to collect gold",
    sfl: new Decimal(0.25),
    ingredients: {
      Wood: new Decimal(3),
      Iron: new Decimal(5),
    },
  },
  Rod: {
    name: "Rod",
    description: "Used to collect fish",
    sfl: new Decimal(0.0625),
    ingredients: {
      Wood: new Decimal(3),
      Stone: new Decimal(1),
    },
  },
});

export const TREASURE_TOOLS: Record<TreasureToolName, Tool> = {
  "Sand Shovel": {
    name: "Sand Shovel",
    description: "Used for digging treasure",
    sfl: new Decimal(0.0625),
    ingredients: {
      Wood: new Decimal(2),
      Stone: new Decimal(1),
    },
  },
  "Sand Drill": {
    name: "Sand Drill",
    description: "Drill deep for uncommon or rare treasure",
    sfl: new Decimal(0.125),
    ingredients: {
      Gold: new Decimal(1),
      Iron: new Decimal(3),
    },
  },
};
