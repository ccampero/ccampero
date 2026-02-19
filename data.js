const MAINTENANCE_DATA = {
  California: {
    climateTip:
      "Prioritize wildfire defensible space, irrigation checks, and cooling-system tune-ups before summer heat and fire season.",
    yearlyChecklist: [
      "Schedule an annual roof and ember-resistant vent inspection before peak wildfire season.",
      "Refresh defensible space: remove dead vegetation and keep a 5-foot noncombustible zone around the home.",
      "Check seismic gas shutoff valve operation and confirm emergency water shutoff access.",
      "Have HVAC professionally tuned and verify attic insulation/ventilation performance."
    ],
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
    yearlyChecklist: [
      "Inspect foundation movement indicators and document seasonal cracks for trend tracking.",
      "Service HVAC before peak summer and verify duct sealing for efficiency.",
      "Evaluate grading and drainage to keep water from pooling near slab edges.",
      "Prepare freeze kit annually: faucet covers, pipe insulation, and shutoff instructions."
    ],
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
    yearlyChecklist: [
      "Book a pre-hurricane-season roof and exterior fastener inspection.",
      "Inspect and clean all drainage paths (gutters, downspouts, swales) before heavy rain periods.",
      "Have HVAC and dehumidification performance checked to manage indoor moisture.",
      "Review storm-prep supplies and verify window/door protection hardware is ready."
    ],
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
    yearlyChecklist: [
      "Perform an annual roof inspection for hail, snow-load wear, and flashing integrity.",
      "Service furnace and test humidifier controls before sustained winter weather.",
      "Inspect grading, sump, and snowmelt pathways to reduce freeze-thaw moisture risk.",
      "Re-seal exterior wood/deck surfaces to protect against UV and dry-air cracking."
    ],
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
