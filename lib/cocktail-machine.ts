export interface PumpConfig {
  id: string
  name: string
  flowRate: number
  gpioPin: number
  ingredient: string
}

const initialPumpConfig: PumpConfig[] = [
  { id: "1", name: "Pump 1", flowRate: 25.0, gpioPin: 17, ingredient: "Vodka" },
  { id: "2", name: "Pump 2", flowRate: 25.0, gpioPin: 18, ingredient: "Gin" },
  { id: "3", name: "Pump 3", flowRate: 25.0, gpioPin: 27, ingredient: "Rum" },
  { id: "4", name: "Pump 4", flowRate: 25.0, gpioPin: 22, ingredient: "Tequila" },
  { id: "5", name: "Pump 5", flowRate: 25.0, gpioPin: 23, ingredient: "Orange Juice" },
  { id: "6", name: "Pump 6", flowRate: 25.0, gpioPin: 24, ingredient: "Cranberry Juice" },
  { id: "7", name: "Pump 7", flowRate: 25.0, gpioPin: 25, ingredient: "Lime Juice" },
  { id: "8", name: "Pump 8", flowRate: 25.0, gpioPin: 4, ingredient: "Simple Syrup" },
]

let pumpConfig: PumpConfig[] = [...initialPumpConfig]

export const getPumpConfig = (): PumpConfig[] => {
  return pumpConfig
}

export const getPump = (id: string): PumpConfig | undefined => {
  return pumpConfig.find((pump) => pump.id === id)
}

export const savePumpConfig = (config: PumpConfig[]): void => {
  // Falls eine Pumpe keinen flowRate hat, setze 25.0 als Standard
  const configWithDefaults = config.map((pump) => ({
    ...pump,
    flowRate: pump.flowRate || 25.0,
  }))

  pumpConfig = configWithDefaults
}

export const resetPumpConfig = (): void => {
  pumpConfig = [...initialPumpConfig]
}
