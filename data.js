const MAINTENANCE_DATA = {
  California: {
    climateTip:
      "Prioritize wildfire defensible space, irrigation checks, and cooling-system tune-ups before summer heat and fire season.",
    monthlyTasks: {
      January: ["Inspect roof flashings after winter storms", "Test GFCI outlets in bathrooms, kitchen, and garage"],
      April: ["Schedule HVAC cooling tune-up", "Trim vegetation away from siding and vents"],
      July: ["Check attic ventilation and insulation hotspots", "Inspect exterior caulking around windows and doors"],
      October: ["Clean gutters before rainy season", "Test smoke and carbon monoxide alarms"]
    }
  },
  Texas: {
    climateTip:
      "Focus on long cooling seasons, clay-soil foundation movement, and sudden freeze readiness in late fall/winter.",
    monthlyTasks: {
      February: ["Wrap exposed exterior pipes before cold snaps", "Check door/weather seals for energy loss"],
      May: ["Flush water heater to reduce sediment", "Inspect irrigation for leaks near foundation"],
      August: ["Service AC condensate drain and replace filters", "Watch for drywall/floor gaps from soil movement"],
      November: ["Inspect attic for rodent entry points", "Cover outdoor faucets and test shutoff valves"]
    }
  },
  Florida: {
    climateTip:
      "Humidity and hurricane exposure make moisture control, drainage, and roof/exterior inspections top priorities.",
    monthlyTasks: {
      March: ["Inspect roof shingles and sealants before storm season", "Clean bathroom exhaust fans to control humidity"],
      June: ["Check gutters/downspouts to move water away from foundation", "Review hurricane kit and window protection"],
      September: ["Inspect for mold-prone areas in closets and air handler", "Flush AC drain line to prevent backups"],
      December: ["Inspect exterior paint/stucco for moisture intrusion", "Trim trees away from roofline"]
    }
  },
  Colorado: {
    climateTip:
      "Large temperature swings and snow loads mean roof, drainage, and furnace upkeep are critical.",
    monthlyTasks: {
      January: ["Check for ice dam formation and attic air leaks", "Replace furnace filter and inspect humidifier"],
      April: ["Inspect foundation and grading after snowmelt", "Test sump pump and clear exterior drains"],
      July: ["Seal deck and exterior wood surfaces", "Inspect sprinkler zones for over-spray on siding"],
      October: ["Service furnace before heating season", "Disconnect hoses and winterize spigots"]
    }
  }
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
