export default {
  "nodes": [
    {
      "id": "IfcAbsorbedDoseMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcAccelerationMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcAmountOfSubstanceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcAngularVelocityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcAreaMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcBoolean",
      "group": 2,
      "details": {
        "definition": "BOOLEAN"
      }
    },
    {
      "id": "IfcBoxAlignment",
      "group": 2,
      "details": {
        "definition": "IfcLabel\n WHERE\n\tWR1 : SELF IN ['top-left', 'top-middle', 'top-right', 'middle-left', 'center', 'middle-right', 'bottom-left', 'bottom-middle', 'bottom-right']"
      }
    },
    {
      "id": "IfcLabel",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcComplexNumber",
      "group": 2,
      "details": {
        "definition": "ARRAY [1:2] OF REAL"
      }
    },
    {
      "id": "IfcCompoundPlaneAngleMeasure",
      "group": 2,
      "details": {
        "definition": "LIST [3:3] OF INTEGER\n WHERE\n\tWR1 : { -360 <= SELF[1] < 360 }\n\tWR2 : { -60 <= SELF[2] < 60 }\n\tWR3 : { -60 <= SELF[3] < 60 }\n\tWR4 : ((SELF[1] >= 0) AND (SELF[2] >= 0) AND (SELF[3] >= 0)) OR ((SELF[1] <= 0) AND (SELF[2] <= 0) AND (SELF[3] <= 0))"
      }
    },
    {
      "id": "IfcContextDependentMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcCountMeasure",
      "group": 2,
      "details": {
        "definition": "NUMBER"
      }
    },
    {
      "id": "IfcCurvatureMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcDayInMonthNumber",
      "group": 2,
      "details": {
        "definition": "INTEGER"
      }
    },
    {
      "id": "IfcDaylightSavingHour",
      "group": 2,
      "details": {
        "definition": "INTEGER\n WHERE\n\tWR1 : { 0 <= SELF <= 2 }"
      }
    },
    {
      "id": "IfcDescriptiveMeasure",
      "group": 2,
      "details": {
        "definition": "STRING"
      }
    },
    {
      "id": "IfcDimensionCount",
      "group": 2,
      "details": {
        "definition": "INTEGER\n WHERE\n\tWR1 : { 0 < SELF <= 3 }"
      }
    },
    {
      "id": "IfcDoseEquivalentMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcDynamicViscosityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcElectricCapacitanceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcElectricChargeMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcElectricConductanceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcElectricCurrentMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcElectricResistanceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcElectricVoltageMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcEnergyMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcFontStyle",
      "group": 2,
      "details": {
        "definition": "STRING\n WHERE\n\tWR1 : SELF IN ['normal','italic','oblique']"
      }
    },
    {
      "id": "IfcFontVariant",
      "group": 2,
      "details": {
        "definition": "STRING\n WHERE\n\tWR1 : SELF IN ['normal','small-caps']"
      }
    },
    {
      "id": "IfcFontWeight",
      "group": 2,
      "details": {
        "definition": "STRING\n WHERE\n\tWR1 : SELF IN ['normal','small-caps','100','200','300','400','500','600','700','800','900']"
      }
    },
    {
      "id": "IfcForceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcFrequencyMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcGloballyUniqueId",
      "group": 2,
      "details": {
        "definition": "STRING(22) FIXED"
      }
    },
    {
      "id": "IfcHeatFluxDensityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcHeatingValueMeasure",
      "group": 2,
      "details": {
        "definition": "REAL\n WHERE\n\tWR1 : SELF > 0."
      }
    },
    {
      "id": "IfcHourInDay",
      "group": 2,
      "details": {
        "definition": "INTEGER\n WHERE\n\tWR1 : { 0 <= SELF < 24 }"
      }
    },
    {
      "id": "IfcIdentifier",
      "group": 2,
      "details": {
        "definition": "STRING"
      }
    },
    {
      "id": "IfcIlluminanceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcInductanceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcInteger",
      "group": 2,
      "details": {
        "definition": "INTEGER"
      }
    },
    {
      "id": "IfcIntegerCountRateMeasure",
      "group": 2,
      "details": {
        "definition": "INTEGER"
      }
    },
    {
      "id": "IfcIonConcentrationMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcIsothermalMoistureCapacityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcKinematicViscosityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcLengthMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcLinearForceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcLinearMomentMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcLinearStiffnessMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcLinearVelocityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcLogical",
      "group": 2,
      "details": {
        "definition": "LOGICAL"
      }
    },
    {
      "id": "IfcLuminousFluxMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcLuminousIntensityDistributionMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcLuminousIntensityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMagneticFluxDensityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMagneticFluxMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMassDensityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMassFlowRateMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMassMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMassPerLengthMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMinuteInHour",
      "group": 2,
      "details": {
        "definition": "INTEGER\n WHERE\n\tWR1 : {0 <= SELF <= 59 }"
      }
    },
    {
      "id": "IfcModulusOfElasticityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcModulusOfLinearSubgradeReactionMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcModulusOfRotationalSubgradeReactionMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcModulusOfSubgradeReactionMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMoistureDiffusivityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMolecularWeightMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMomentOfInertiaMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMonetaryMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcMonthInYearNumber",
      "group": 2,
      "details": {
        "definition": "INTEGER\n WHERE\n\tWR1 : { 1<= SELF <= 12 }"
      }
    },
    {
      "id": "IfcNormalisedRatioMeasure",
      "group": 2,
      "details": {
        "definition": "IfcRatioMeasure\n WHERE\n\tWR1 : {0.0 <= SELF <= 1.0}"
      }
    },
    {
      "id": "IfcRatioMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcNumericMeasure",
      "group": 2,
      "details": {
        "definition": "NUMBER"
      }
    },
    {
      "id": "IfcPHMeasure",
      "group": 2,
      "details": {
        "definition": "REAL\n WHERE\n\tWR21 : {0.0 <= SELF <= 14.0}"
      }
    },
    {
      "id": "IfcParameterValue",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcPlanarForceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcPlaneAngleMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcPositiveLengthMeasure",
      "group": 2,
      "details": {
        "definition": "IfcLengthMeasure\n WHERE\n\tWR1 : SELF > 0."
      }
    },
    {
      "id": "IfcPositivePlaneAngleMeasure",
      "group": 2,
      "details": {
        "definition": "IfcPlaneAngleMeasure\n WHERE\n\tWR1 : SELF > 0."
      }
    },
    {
      "id": "IfcPositiveRatioMeasure",
      "group": 2,
      "details": {
        "definition": "IfcRatioMeasure\n WHERE\n\tWR1 : SELF > 0."
      }
    },
    {
      "id": "IfcPowerMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcPresentableText",
      "group": 2,
      "details": {
        "definition": "STRING"
      }
    },
    {
      "id": "IfcPressureMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcRadioActivityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcReal",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcRotationalFrequencyMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcRotationalMassMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcRotationalStiffnessMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcSecondInMinute",
      "group": 2,
      "details": {
        "definition": "REAL\n WHERE\n\tWR1 : { 0. <= SELF < 60. }"
      }
    },
    {
      "id": "IfcSectionModulusMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcSectionalAreaIntegralMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcShearModulusMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcSolidAngleMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcSoundPowerMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcSoundPressureMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcSpecificHeatCapacityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcSpecularExponent",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcSpecularRoughness",
      "group": 2,
      "details": {
        "definition": "REAL\n WHERE\n\tWR1 : {0.0 <= SELF <= 1.0}"
      }
    },
    {
      "id": "IfcTemperatureGradientMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcText",
      "group": 2,
      "details": {
        "definition": "STRING"
      }
    },
    {
      "id": "IfcTextAlignment",
      "group": 2,
      "details": {
        "definition": "STRING\n WHERE\n\tWR1 : SELF IN ['left', 'right', 'center', 'justify']"
      }
    },
    {
      "id": "IfcTextDecoration",
      "group": 2,
      "details": {
        "definition": "STRING\n WHERE\n\tWR1 : SELF IN ['none', 'underline', 'overline', 'line-through', 'blink']"
      }
    },
    {
      "id": "IfcTextFontName",
      "group": 2,
      "details": {
        "definition": "STRING"
      }
    },
    {
      "id": "IfcTextTransformation",
      "group": 2,
      "details": {
        "definition": "STRING\n WHERE\n\tWR1 : SELF IN ['capitalize', 'uppercase', 'lowercase', 'none']"
      }
    },
    {
      "id": "IfcThermalAdmittanceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcThermalConductivityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcThermalExpansionCoefficientMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcThermalResistanceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcThermalTransmittanceMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcThermodynamicTemperatureMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcTimeMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcTimeStamp",
      "group": 2,
      "details": {
        "definition": "INTEGER"
      }
    },
    {
      "id": "IfcTorqueMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcVaporPermeabilityMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcVolumeMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcVolumetricFlowRateMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcWarpingConstantMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcWarpingMomentMeasure",
      "group": 2,
      "details": {
        "definition": "REAL"
      }
    },
    {
      "id": "IfcYearNumber",
      "group": 2,
      "details": {
        "definition": "INTEGER"
      }
    },
    {
      "id": "IfcActionSourceTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DEAD_LOAD_G\n\t,COMPLETION_G1\n\t,LIVE_LOAD_Q\n\t,SNOW_S\n\t,WIND_W\n\t,PRESTRESSING_P\n\t,SETTLEMENT_U\n\t,TEMPERATURE_T\n\t,EARTHQUAKE_E\n\t,FIRE\n\t,IMPULSE\n\t,IMPACT\n\t,TRANSPORT\n\t,ERECTION\n\t,PROPPING\n\t,SYSTEM_IMPERFECTION\n\t,SHRINKAGE\n\t,CREEP\n\t,LACK_OF_FIT\n\t,BUOYANCY\n\t,ICE\n\t,CURRENT\n\t,WAVE\n\t,RAIN\n\t,BRAKES\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcActionTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PERMANENT_G\n\t,VARIABLE_Q\n\t,EXTRAORDINARY_A\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcActuatorTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ELECTRICACTUATOR\n\t,HANDOPERATEDACTUATOR\n\t,HYDRAULICACTUATOR\n\t,PNEUMATICACTUATOR\n\t,THERMOSTATICACTUATOR\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcAddressTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(OFFICE\n\t,SITE\n\t,HOME\n\t,DISTRIBUTIONPOINT\n\t,USERDEFINED)"
      }
    },
    {
      "id": "IfcAheadOrBehind",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(AHEAD\n\t,BEHIND)"
      }
    },
    {
      "id": "IfcAirTerminalBoxTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CONSTANTFLOW\n\t,VARIABLEFLOWPRESSUREDEPENDANT\n\t,VARIABLEFLOWPRESSUREINDEPENDANT\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcAirTerminalTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(GRILLE\n\t,REGISTER\n\t,DIFFUSER\n\t,EYEBALL\n\t,IRIS\n\t,LINEARGRILLE\n\t,LINEARDIFFUSER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcAirToAirHeatRecoveryTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FIXEDPLATECOUNTERFLOWEXCHANGER\n\t,FIXEDPLATECROSSFLOWEXCHANGER\n\t,FIXEDPLATEPARALLELFLOWEXCHANGER\n\t,ROTARYWHEEL\n\t,RUNAROUNDCOILLOOP\n\t,HEATPIPE\n\t,TWINTOWERENTHALPYRECOVERYLOOPS\n\t,THERMOSIPHONSEALEDTUBEHEATEXCHANGERS\n\t,THERMOSIPHONCOILTYPEHEATEXCHANGERS\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcAlarmTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BELL\n\t,BREAKGLASSBUTTON\n\t,LIGHT\n\t,MANUALPULLBOX\n\t,SIREN\n\t,WHISTLE\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcAnalysisModelTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(IN_PLANE_LOADING_2D\n\t,OUT_PLANE_LOADING_2D\n\t,LOADING_3D\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcAnalysisTheoryTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FIRST_ORDER_THEORY\n\t,SECOND_ORDER_THEORY\n\t,THIRD_ORDER_THEORY\n\t,FULL_NONLINEAR_THEORY\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcArithmeticOperatorEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ADD\n\t,DIVIDE\n\t,MULTIPLY\n\t,SUBTRACT)"
      }
    },
    {
      "id": "IfcAssemblyPlaceEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(SITE\n\t,FACTORY\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcBSplineCurveForm",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(POLYLINE_FORM\n\t,CIRCULAR_ARC\n\t,ELLIPTIC_ARC\n\t,PARABOLIC_ARC\n\t,HYPERBOLIC_ARC\n\t,UNSPECIFIED)"
      }
    },
    {
      "id": "IfcBeamTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BEAM\n\t,JOIST\n\t,LINTEL\n\t,T_BEAM\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcBenchmarkEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(GREATERTHAN\n\t,GREATERTHANOREQUALTO\n\t,LESSTHAN\n\t,LESSTHANOREQUALTO\n\t,EQUALTO\n\t,NOTEQUALTO)"
      }
    },
    {
      "id": "IfcBoilerTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(WATER\n\t,STEAM\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcBooleanOperator",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(UNION\n\t,INTERSECTION\n\t,DIFFERENCE)"
      }
    },
    {
      "id": "IfcBuildingElementProxyTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCableCarrierFittingTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BEND\n\t,CROSS\n\t,REDUCER\n\t,TEE\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCableCarrierSegmentTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CABLELADDERSEGMENT\n\t,CABLETRAYSEGMENT\n\t,CABLETRUNKINGSEGMENT\n\t,CONDUITSEGMENT\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCableSegmentTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CABLESEGMENT\n\t,CONDUCTORSEGMENT\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcChangeActionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(NOCHANGE\n\t,MODIFIED\n\t,ADDED\n\t,DELETED\n\t,MODIFIEDADDED\n\t,MODIFIEDDELETED)"
      }
    },
    {
      "id": "IfcChillerTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(AIRCOOLED\n\t,WATERCOOLED\n\t,HEATRECOVERY\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCoilTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DXCOOLINGCOIL\n\t,WATERCOOLINGCOIL\n\t,STEAMHEATINGCOIL\n\t,WATERHEATINGCOIL\n\t,ELECTRICHEATINGCOIL\n\t,GASHEATINGCOIL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcColumnTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(COLUMN\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCompressorTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DYNAMIC\n\t,RECIPROCATING\n\t,ROTARY\n\t,SCROLL\n\t,TROCHOIDAL\n\t,SINGLESTAGE\n\t,BOOSTER\n\t,OPENTYPE\n\t,HERMETIC\n\t,SEMIHERMETIC\n\t,WELDEDSHELLHERMETIC\n\t,ROLLINGPISTON\n\t,ROTARYVANE\n\t,SINGLESCREW\n\t,TWINSCREW\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCondenserTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(WATERCOOLEDSHELLTUBE\n\t,WATERCOOLEDSHELLCOIL\n\t,WATERCOOLEDTUBEINTUBE\n\t,WATERCOOLEDBRAZEDPLATE\n\t,AIRCOOLED\n\t,EVAPORATIVECOOLED\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcConnectionTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ATPATH\n\t,ATSTART\n\t,ATEND\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcConstraintEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(HARD\n\t,SOFT\n\t,ADVISORY\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcControllerTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FLOATING\n\t,PROPORTIONAL\n\t,PROPORTIONALINTEGRAL\n\t,PROPORTIONALINTEGRALDERIVATIVE\n\t,TIMEDTWOPOSITION\n\t,TWOPOSITION\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCooledBeamTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ACTIVE\n\t,PASSIVE\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCoolingTowerTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(NATURALDRAFT\n\t,MECHANICALINDUCEDDRAFT\n\t,MECHANICALFORCEDDRAFT\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCostScheduleTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BUDGET\n\t,COSTPLAN\n\t,ESTIMATE\n\t,TENDER\n\t,PRICEDBILLOFQUANTITIES\n\t,UNPRICEDBILLOFQUANTITIES\n\t,SCHEDULEOFRATES\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCoveringTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CEILING\n\t,FLOORING\n\t,CLADDING\n\t,ROOFING\n\t,INSULATION\n\t,MEMBRANE\n\t,SLEEVING\n\t,WRAPPING\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcCurrencyEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(AED\n\t,AES\n\t,ATS\n\t,AUD\n\t,BBD\n\t,BEG\n\t,BGL\n\t,BHD\n\t,BMD\n\t,BND\n\t,BRL\n\t,BSD\n\t,BWP\n\t,BZD\n\t,CAD\n\t,CBD\n\t,CHF\n\t,CLP\n\t,CNY\n\t,CYS\n\t,CZK\n\t,DDP\n\t,DEM\n\t,DKK\n\t,EGL\n\t,EST\n\t,EUR\n\t,FAK\n\t,FIM\n\t,FJD\n\t,FKP\n\t,FRF\n\t,GBP\n\t,GIP\n\t,GMD\n\t,GRX\n\t,HKD\n\t,HUF\n\t,ICK\n\t,IDR\n\t,ILS\n\t,INR\n\t,IRP\n\t,ITL\n\t,JMD\n\t,JOD\n\t,JPY\n\t,KES\n\t,KRW\n\t,KWD\n\t,KYD\n\t,LKR\n\t,LUF\n\t,MTL\n\t,MUR\n\t,MXN\n\t,MYR\n\t,NLG\n\t,NZD\n\t,OMR\n\t,PGK\n\t,PHP\n\t,PKR\n\t,PLN\n\t,PTN\n\t,QAR\n\t,RUR\n\t,SAR\n\t,SCR\n\t,SEK\n\t,SGD\n\t,SKP\n\t,THB\n\t,TRL\n\t,TTD\n\t,TWD\n\t,USD\n\t,VEB\n\t,VND\n\t,XEU\n\t,ZAR\n\t,ZWD\n\t,NOK)"
      }
    },
    {
      "id": "IfcCurtainWallTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDamperTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CONTROLDAMPER\n\t,FIREDAMPER\n\t,SMOKEDAMPER\n\t,FIRESMOKEDAMPER\n\t,BACKDRAFTDAMPER\n\t,RELIEFDAMPER\n\t,BLASTDAMPER\n\t,GRAVITYDAMPER\n\t,GRAVITYRELIEFDAMPER\n\t,BALANCINGDAMPER\n\t,FUMEHOODEXHAUST\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDataOriginEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(MEASURED\n\t,PREDICTED\n\t,SIMULATED\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDerivedUnitEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ANGULARVELOCITYUNIT\n\t,COMPOUNDPLANEANGLEUNIT\n\t,DYNAMICVISCOSITYUNIT\n\t,HEATFLUXDENSITYUNIT\n\t,INTEGERCOUNTRATEUNIT\n\t,ISOTHERMALMOISTURECAPACITYUNIT\n\t,KINEMATICVISCOSITYUNIT\n\t,LINEARVELOCITYUNIT\n\t,MASSDENSITYUNIT\n\t,MASSFLOWRATEUNIT\n\t,MOISTUREDIFFUSIVITYUNIT\n\t,MOLECULARWEIGHTUNIT\n\t,SPECIFICHEATCAPACITYUNIT\n\t,THERMALADMITTANCEUNIT\n\t,THERMALCONDUCTANCEUNIT\n\t,THERMALRESISTANCEUNIT\n\t,THERMALTRANSMITTANCEUNIT\n\t,VAPORPERMEABILITYUNIT\n\t,VOLUMETRICFLOWRATEUNIT\n\t,ROTATIONALFREQUENCYUNIT\n\t,TORQUEUNIT\n\t,MOMENTOFINERTIAUNIT\n\t,LINEARMOMENTUNIT\n\t,LINEARFORCEUNIT\n\t,PLANARFORCEUNIT\n\t,MODULUSOFELASTICITYUNIT\n\t,SHEARMODULUSUNIT\n\t,LINEARSTIFFNESSUNIT\n\t,ROTATIONALSTIFFNESSUNIT\n\t,MODULUSOFSUBGRADEREACTIONUNIT\n\t,ACCELERATIONUNIT\n\t,CURVATUREUNIT\n\t,HEATINGVALUEUNIT\n\t,IONCONCENTRATIONUNIT\n\t,LUMINOUSINTENSITYDISTRIBUTIONUNIT\n\t,MASSPERLENGTHUNIT\n\t,MODULUSOFLINEARSUBGRADEREACTIONUNIT\n\t,MODULUSOFROTATIONALSUBGRADEREACTIONUNIT\n\t,PHUNIT\n\t,ROTATIONALMASSUNIT\n\t,SECTIONAREAINTEGRALUNIT\n\t,SECTIONMODULUSUNIT\n\t,SOUNDPOWERUNIT\n\t,SOUNDPRESSUREUNIT\n\t,TEMPERATUREGRADIENTUNIT\n\t,THERMALEXPANSIONCOEFFICIENTUNIT\n\t,WARPINGCONSTANTUNIT\n\t,WARPINGMOMENTUNIT\n\t,USERDEFINED)"
      }
    },
    {
      "id": "IfcDimensionExtentUsage",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ORIGIN\n\t,TARGET)"
      }
    },
    {
      "id": "IfcDirectionSenseEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(POSITIVE\n\t,NEGATIVE)"
      }
    },
    {
      "id": "IfcDistributionChamberElementTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FORMEDDUCT\n\t,INSPECTIONCHAMBER\n\t,INSPECTIONPIT\n\t,MANHOLE\n\t,METERCHAMBER\n\t,SUMP\n\t,TRENCH\n\t,VALVECHAMBER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDocumentConfidentialityEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PUBLIC\n\t,RESTRICTED\n\t,CONFIDENTIAL\n\t,PERSONAL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDocumentStatusEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DRAFT\n\t,FINALDRAFT\n\t,FINAL\n\t,REVISION\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDoorPanelOperationEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(SWINGING\n\t,DOUBLE_ACTING\n\t,SLIDING\n\t,FOLDING\n\t,REVOLVING\n\t,ROLLINGUP\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDoorPanelPositionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(LEFT\n\t,MIDDLE\n\t,RIGHT\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDoorStyleConstructionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ALUMINIUM\n\t,HIGH_GRADE_STEEL\n\t,STEEL\n\t,WOOD\n\t,ALUMINIUM_WOOD\n\t,ALUMINIUM_PLASTIC\n\t,PLASTIC\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDoorStyleOperationEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(SINGLE_SWING_LEFT\n\t,SINGLE_SWING_RIGHT\n\t,DOUBLE_DOOR_SINGLE_SWING\n\t,DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_LEFT\n\t,DOUBLE_DOOR_SINGLE_SWING_OPPOSITE_RIGHT\n\t,DOUBLE_SWING_LEFT\n\t,DOUBLE_SWING_RIGHT\n\t,DOUBLE_DOOR_DOUBLE_SWING\n\t,SLIDING_TO_LEFT\n\t,SLIDING_TO_RIGHT\n\t,DOUBLE_DOOR_SLIDING\n\t,FOLDING_TO_LEFT\n\t,FOLDING_TO_RIGHT\n\t,DOUBLE_DOOR_FOLDING\n\t,REVOLVING\n\t,ROLLINGUP\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDuctFittingTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BEND\n\t,CONNECTOR\n\t,ENTRY\n\t,EXIT\n\t,JUNCTION\n\t,OBSTRUCTION\n\t,TRANSITION\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDuctSegmentTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(RIGIDSEGMENT\n\t,FLEXIBLESEGMENT\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcDuctSilencerTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FLATOVAL\n\t,RECTANGULAR\n\t,ROUND\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcElectricApplianceTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(COMPUTER\n\t,DIRECTWATERHEATER\n\t,DISHWASHER\n\t,ELECTRICCOOKER\n\t,ELECTRICHEATER\n\t,FACSIMILE\n\t,FREESTANDINGFAN\n\t,FREEZER\n\t,FRIDGE_FREEZER\n\t,HANDDRYER\n\t,INDIRECTWATERHEATER\n\t,MICROWAVE\n\t,PHOTOCOPIER\n\t,PRINTER\n\t,REFRIGERATOR\n\t,RADIANTHEATER\n\t,SCANNER\n\t,TELEPHONE\n\t,TUMBLEDRYER\n\t,TV\n\t,VENDINGMACHINE\n\t,WASHINGMACHINE\n\t,WATERHEATER\n\t,WATERCOOLER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcElectricCurrentEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ALTERNATING\n\t,DIRECT\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcElectricDistributionPointFunctionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ALARMPANEL\n\t,CONSUMERUNIT\n\t,CONTROLPANEL\n\t,DISTRIBUTIONBOARD\n\t,GASDETECTORPANEL\n\t,INDICATORPANEL\n\t,MIMICPANEL\n\t,MOTORCONTROLCENTRE\n\t,SWITCHBOARD\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcElectricFlowStorageDeviceTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BATTERY\n\t,CAPACITORBANK\n\t,HARMONICFILTER\n\t,INDUCTORBANK\n\t,UPS\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcElectricGeneratorTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcElectricHeaterTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ELECTRICPOINTHEATER\n\t,ELECTRICCABLEHEATER\n\t,ELECTRICMATHEATER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcElectricMotorTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DC\n\t,INDUCTION\n\t,POLYPHASE\n\t,RELUCTANCESYNCHRONOUS\n\t,SYNCHRONOUS\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcElectricTimeControlTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(TIMECLOCK\n\t,TIMEDELAY\n\t,RELAY\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcElementAssemblyTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ACCESSORY_ASSEMBLY\n\t,ARCH\n\t,BEAM_GRID\n\t,BRACED_FRAME\n\t,GIRDER\n\t,REINFORCEMENT_UNIT\n\t,RIGID_FRAME\n\t,SLAB_FIELD\n\t,TRUSS\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcElementCompositionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(COMPLEX\n\t,ELEMENT\n\t,PARTIAL)"
      }
    },
    {
      "id": "IfcEnergySequenceEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PRIMARY\n\t,SECONDARY\n\t,TERTIARY\n\t,AUXILIARY\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcEnvironmentalImpactCategoryEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(COMBINEDVALUE\n\t,DISPOSAL\n\t,EXTRACTION\n\t,INSTALLATION\n\t,MANUFACTURE\n\t,TRANSPORTATION\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcEvaporativeCoolerTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DIRECTEVAPORATIVERANDOMMEDIAAIRCOOLER\n\t,DIRECTEVAPORATIVERIGIDMEDIAAIRCOOLER\n\t,DIRECTEVAPORATIVESLINGERSPACKAGEDAIRCOOLER\n\t,DIRECTEVAPORATIVEPACKAGEDROTARYAIRCOOLER\n\t,DIRECTEVAPORATIVEAIRWASHER\n\t,INDIRECTEVAPORATIVEPACKAGEAIRCOOLER\n\t,INDIRECTEVAPORATIVEWETCOIL\n\t,INDIRECTEVAPORATIVECOOLINGTOWERORCOILCOOLER\n\t,INDIRECTDIRECTCOMBINATION\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcEvaporatorTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DIRECTEXPANSIONSHELLANDTUBE\n\t,DIRECTEXPANSIONTUBEINTUBE\n\t,DIRECTEXPANSIONBRAZEDPLATE\n\t,FLOODEDSHELLANDTUBE\n\t,SHELLANDCOIL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcFanTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CENTRIFUGALFORWARDCURVED\n\t,CENTRIFUGALRADIAL\n\t,CENTRIFUGALBACKWARDINCLINEDCURVED\n\t,CENTRIFUGALAIRFOIL\n\t,TUBEAXIAL\n\t,VANEAXIAL\n\t,PROPELLORAXIAL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcFilterTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(AIRPARTICLEFILTER\n\t,ODORFILTER\n\t,OILFILTER\n\t,STRAINER\n\t,WATERFILTER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcFireSuppressionTerminalTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BREECHINGINLET\n\t,FIREHYDRANT\n\t,HOSEREEL\n\t,SPRINKLER\n\t,SPRINKLERDEFLECTOR\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcFlowDirectionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(SOURCE\n\t,SINK\n\t,SOURCEANDSINK\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcFlowInstrumentTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PRESSUREGAUGE\n\t,THERMOMETER\n\t,AMMETER\n\t,FREQUENCYMETER\n\t,POWERFACTORMETER\n\t,PHASEANGLEMETER\n\t,VOLTMETER_PEAK\n\t,VOLTMETER_RMS\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcFlowMeterTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ELECTRICMETER\n\t,ENERGYMETER\n\t,FLOWMETER\n\t,GASMETER\n\t,OILMETER\n\t,WATERMETER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcFootingTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FOOTING_BEAM\n\t,PAD_FOOTING\n\t,PILE_CAP\n\t,STRIP_FOOTING\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcGasTerminalTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(GASAPPLIANCE\n\t,GASBOOSTER\n\t,GASBURNER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcGeometricProjectionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(GRAPH_VIEW\n\t,SKETCH_VIEW\n\t,MODEL_VIEW\n\t,PLAN_VIEW\n\t,REFLECTED_PLAN_VIEW\n\t,SECTION_VIEW\n\t,ELEVATION_VIEW\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcGlobalOrLocalEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(GLOBAL_COORDS\n\t,LOCAL_COORDS)"
      }
    },
    {
      "id": "IfcHeatExchangerTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PLATE\n\t,SHELLANDTUBE\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcHumidifierTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(STEAMINJECTION\n\t,ADIABATICAIRWASHER\n\t,ADIABATICPAN\n\t,ADIABATICWETTEDELEMENT\n\t,ADIABATICATOMIZING\n\t,ADIABATICULTRASONIC\n\t,ADIABATICRIGIDMEDIA\n\t,ADIABATICCOMPRESSEDAIRNOZZLE\n\t,ASSISTEDELECTRIC\n\t,ASSISTEDNATURALGAS\n\t,ASSISTEDPROPANE\n\t,ASSISTEDBUTANE\n\t,ASSISTEDSTEAM\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcInternalOrExternalEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(INTERNAL\n\t,EXTERNAL\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcInventoryTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ASSETINVENTORY\n\t,SPACEINVENTORY\n\t,FURNITUREINVENTORY\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcJunctionBoxTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcLampTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(COMPACTFLUORESCENT\n\t,FLUORESCENT\n\t,HIGHPRESSUREMERCURY\n\t,HIGHPRESSURESODIUM\n\t,METALHALIDE\n\t,TUNGSTENFILAMENT\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcLayerSetDirectionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(AXIS1\n\t,AXIS2\n\t,AXIS3)"
      }
    },
    {
      "id": "IfcLightDistributionCurveEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(TYPE_A\n\t,TYPE_B\n\t,TYPE_C\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcLightEmissionSourceEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(COMPACTFLUORESCENT\n\t,FLUORESCENT\n\t,HIGHPRESSUREMERCURY\n\t,HIGHPRESSURESODIUM\n\t,LIGHTEMITTINGDIODE\n\t,LOWPRESSURESODIUM\n\t,LOWVOLTAGEHALOGEN\n\t,MAINVOLTAGEHALOGEN\n\t,METALHALIDE\n\t,TUNGSTENFILAMENT\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcLightFixtureTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(POINTSOURCE\n\t,DIRECTIONSOURCE\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcLoadGroupTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(LOAD_GROUP\n\t,LOAD_CASE\n\t,LOAD_COMBINATION_GROUP\n\t,LOAD_COMBINATION\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcLogicalOperatorEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(LOGICALAND\n\t,LOGICALOR)"
      }
    },
    {
      "id": "IfcMemberTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BRACE\n\t,CHORD\n\t,COLLAR\n\t,MEMBER\n\t,MULLION\n\t,PLATE\n\t,POST\n\t,PURLIN\n\t,RAFTER\n\t,STRINGER\n\t,STRUT\n\t,STUD\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcMotorConnectionTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BELTDRIVE\n\t,COUPLING\n\t,DIRECTDRIVE\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcNullStyle",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(NULL)"
      }
    },
    {
      "id": "IfcObjectTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PRODUCT\n\t,PROCESS\n\t,CONTROL\n\t,RESOURCE\n\t,ACTOR\n\t,GROUP\n\t,PROJECT\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcObjectiveEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CODECOMPLIANCE\n\t,DESIGNINTENT\n\t,HEALTHANDSAFETY\n\t,REQUIREMENT\n\t,SPECIFICATION\n\t,TRIGGERCONDITION\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcOccupantTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ASSIGNEE\n\t,ASSIGNOR\n\t,LESSEE\n\t,LESSOR\n\t,LETTINGAGENT\n\t,OWNER\n\t,TENANT\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcOutletTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(AUDIOVISUALOUTLET\n\t,COMMUNICATIONSOUTLET\n\t,POWEROUTLET\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcPermeableCoveringOperationEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(GRILL\n\t,LOUVER\n\t,SCREEN\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcPhysicalOrVirtualEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PHYSICAL\n\t,VIRTUAL\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcPileConstructionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CAST_IN_PLACE\n\t,COMPOSITE\n\t,PRECAST_CONCRETE\n\t,PREFAB_STEEL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcPileTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(COHESION\n\t,FRICTION\n\t,SUPPORT\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcPipeFittingTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BEND\n\t,CONNECTOR\n\t,ENTRY\n\t,EXIT\n\t,JUNCTION\n\t,OBSTRUCTION\n\t,TRANSITION\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcPipeSegmentTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FLEXIBLESEGMENT\n\t,RIGIDSEGMENT\n\t,GUTTER\n\t,SPOOL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcPlateTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CURTAIN_PANEL\n\t,SHEET\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcProcedureTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ADVICE_CAUTION\n\t,ADVICE_NOTE\n\t,ADVICE_WARNING\n\t,CALIBRATION\n\t,DIAGNOSTIC\n\t,SHUTDOWN\n\t,STARTUP\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcProfileTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CURVE\n\t,AREA)"
      }
    },
    {
      "id": "IfcProjectOrderRecordTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CHANGE\n\t,MAINTENANCE\n\t,MOVE\n\t,PURCHASE\n\t,WORK\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcProjectOrderTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CHANGEORDER\n\t,MAINTENANCEWORKORDER\n\t,MOVEORDER\n\t,PURCHASEORDER\n\t,WORKORDER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcProjectedOrTrueLengthEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PROJECTED_LENGTH\n\t,TRUE_LENGTH)"
      }
    },
    {
      "id": "IfcPropertySourceEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DESIGN\n\t,DESIGNMAXIMUM\n\t,DESIGNMINIMUM\n\t,SIMULATED\n\t,ASBUILT\n\t,COMMISSIONING\n\t,MEASURED\n\t,USERDEFINED\n\t,NOTKNOWN)"
      }
    },
    {
      "id": "IfcProtectiveDeviceTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FUSEDISCONNECTOR\n\t,CIRCUITBREAKER\n\t,EARTHFAILUREDEVICE\n\t,RESIDUALCURRENTCIRCUITBREAKER\n\t,RESIDUALCURRENTSWITCH\n\t,VARISTOR\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcPumpTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CIRCULATOR\n\t,ENDSUCTION\n\t,SPLITCASE\n\t,VERTICALINLINE\n\t,VERTICALTURBINE\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcRailingTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(HANDRAIL\n\t,GUARDRAIL\n\t,BALUSTRADE\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcRampFlightTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(STRAIGHT\n\t,SPIRAL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcRampTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(STRAIGHT_RUN_RAMP\n\t,TWO_STRAIGHT_RUN_RAMP\n\t,QUARTER_TURN_RAMP\n\t,TWO_QUARTER_TURN_RAMP\n\t,HALF_TURN_RAMP\n\t,SPIRAL_RAMP\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcReflectanceMethodEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BLINN\n\t,FLAT\n\t,GLASS\n\t,MATT\n\t,METAL\n\t,MIRROR\n\t,PHONG\n\t,PLASTIC\n\t,STRAUSS\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcReinforcingBarRoleEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(MAIN\n\t,SHEAR\n\t,LIGATURE\n\t,STUD\n\t,PUNCHING\n\t,EDGE\n\t,RING\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcReinforcingBarSurfaceEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PLAIN\n\t,TEXTURED)"
      }
    },
    {
      "id": "IfcResourceConsumptionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CONSUMED\n\t,PARTIALLYCONSUMED\n\t,NOTCONSUMED\n\t,OCCUPIED\n\t,PARTIALLYOCCUPIED\n\t,NOTOCCUPIED\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcRibPlateDirectionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DIRECTION_X\n\t,DIRECTION_Y)"
      }
    },
    {
      "id": "IfcRoleEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(SUPPLIER\n\t,MANUFACTURER\n\t,CONTRACTOR\n\t,SUBCONTRACTOR\n\t,ARCHITECT\n\t,STRUCTURALENGINEER\n\t,COSTENGINEER\n\t,CLIENT\n\t,BUILDINGOWNER\n\t,BUILDINGOPERATOR\n\t,MECHANICALENGINEER\n\t,ELECTRICALENGINEER\n\t,PROJECTMANAGER\n\t,FACILITIESMANAGER\n\t,CIVILENGINEER\n\t,COMISSIONINGENGINEER\n\t,ENGINEER\n\t,OWNER\n\t,CONSULTANT\n\t,CONSTRUCTIONMANAGER\n\t,FIELDCONSTRUCTIONMANAGER\n\t,RESELLER\n\t,USERDEFINED)"
      }
    },
    {
      "id": "IfcRoofTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FLAT_ROOF\n\t,SHED_ROOF\n\t,GABLE_ROOF\n\t,HIP_ROOF\n\t,HIPPED_GABLE_ROOF\n\t,GAMBREL_ROOF\n\t,MANSARD_ROOF\n\t,BARREL_ROOF\n\t,RAINBOW_ROOF\n\t,BUTTERFLY_ROOF\n\t,PAVILION_ROOF\n\t,DOME_ROOF\n\t,FREEFORM\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcSIPrefix",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(EXA\n\t,PETA\n\t,TERA\n\t,GIGA\n\t,MEGA\n\t,KILO\n\t,HECTO\n\t,DECA\n\t,DECI\n\t,CENTI\n\t,MILLI\n\t,MICRO\n\t,NANO\n\t,PICO\n\t,FEMTO\n\t,ATTO)"
      }
    },
    {
      "id": "IfcSIUnitName",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(AMPERE\n\t,BECQUEREL\n\t,CANDELA\n\t,COULOMB\n\t,CUBIC_METRE\n\t,DEGREE_CELSIUS\n\t,FARAD\n\t,GRAM\n\t,GRAY\n\t,HENRY\n\t,HERTZ\n\t,JOULE\n\t,KELVIN\n\t,LUMEN\n\t,LUX\n\t,METRE\n\t,MOLE\n\t,NEWTON\n\t,OHM\n\t,PASCAL\n\t,RADIAN\n\t,SECOND\n\t,SIEMENS\n\t,SIEVERT\n\t,SQUARE_METRE\n\t,STERADIAN\n\t,TESLA\n\t,VOLT\n\t,WATT\n\t,WEBER)"
      }
    },
    {
      "id": "IfcSanitaryTerminalTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BATH\n\t,BIDET\n\t,CISTERN\n\t,SHOWER\n\t,SINK\n\t,SANITARYFOUNTAIN\n\t,TOILETPAN\n\t,URINAL\n\t,WASHHANDBASIN\n\t,WCSEAT\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcSectionTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(UNIFORM\n\t,TAPERED)"
      }
    },
    {
      "id": "IfcSensorTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CO2SENSOR\n\t,FIRESENSOR\n\t,FLOWSENSOR\n\t,GASSENSOR\n\t,HEATSENSOR\n\t,HUMIDITYSENSOR\n\t,LIGHTSENSOR\n\t,MOISTURESENSOR\n\t,MOVEMENTSENSOR\n\t,PRESSURESENSOR\n\t,SMOKESENSOR\n\t,SOUNDSENSOR\n\t,TEMPERATURESENSOR\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcSequenceEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(START_START\n\t,START_FINISH\n\t,FINISH_START\n\t,FINISH_FINISH\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcServiceLifeFactorTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(A_QUALITYOFCOMPONENTS\n\t,B_DESIGNLEVEL\n\t,C_WORKEXECUTIONLEVEL\n\t,D_INDOORENVIRONMENT\n\t,E_OUTDOORENVIRONMENT\n\t,F_INUSECONDITIONS\n\t,G_MAINTENANCELEVEL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcServiceLifeTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ACTUALSERVICELIFE\n\t,EXPECTEDSERVICELIFE\n\t,OPTIMISTICREFERENCESERVICELIFE\n\t,PESSIMISTICREFERENCESERVICELIFE\n\t,REFERENCESERVICELIFE)"
      }
    },
    {
      "id": "IfcSlabTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FLOOR\n\t,ROOF\n\t,LANDING\n\t,BASESLAB\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcSoundScaleEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DBA\n\t,DBB\n\t,DBC\n\t,NC\n\t,NR\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcSpaceHeaterTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(SECTIONALRADIATOR\n\t,PANELRADIATOR\n\t,TUBULARRADIATOR\n\t,CONVECTOR\n\t,BASEBOARDHEATER\n\t,FINNEDTUBEUNIT\n\t,UNITHEATER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcSpaceTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcStackTerminalTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BIRDCAGE\n\t,COWL\n\t,RAINWATERHOPPER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcStairFlightTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(STRAIGHT\n\t,WINDER\n\t,SPIRAL\n\t,CURVED\n\t,FREEFORM\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcStairTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(STRAIGHT_RUN_STAIR\n\t,TWO_STRAIGHT_RUN_STAIR\n\t,QUARTER_WINDING_STAIR\n\t,QUARTER_TURN_STAIR\n\t,HALF_WINDING_STAIR\n\t,HALF_TURN_STAIR\n\t,TWO_QUARTER_WINDING_STAIR\n\t,TWO_QUARTER_TURN_STAIR\n\t,THREE_QUARTER_WINDING_STAIR\n\t,THREE_QUARTER_TURN_STAIR\n\t,SPIRAL_STAIR\n\t,DOUBLE_RETURN_STAIR\n\t,CURVED_RUN_STAIR\n\t,TWO_CURVED_RUN_STAIR\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcStateEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(READWRITE\n\t,READONLY\n\t,LOCKED\n\t,READWRITELOCKED\n\t,READONLYLOCKED)"
      }
    },
    {
      "id": "IfcStructuralCurveTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(RIGID_JOINED_MEMBER\n\t,PIN_JOINED_MEMBER\n\t,CABLE\n\t,TENSION_MEMBER\n\t,COMPRESSION_MEMBER\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcStructuralSurfaceTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BENDING_ELEMENT\n\t,MEMBRANE_ELEMENT\n\t,SHELL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcSurfaceSide",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(POSITIVE\n\t,NEGATIVE\n\t,BOTH)"
      }
    },
    {
      "id": "IfcSurfaceTextureEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(BUMP\n\t,OPACITY\n\t,REFLECTION\n\t,SELFILLUMINATION\n\t,SHININESS\n\t,SPECULAR\n\t,TEXTURE\n\t,TRANSPARENCYMAP\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcSwitchingDeviceTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CONTACTOR\n\t,EMERGENCYSTOP\n\t,STARTER\n\t,SWITCHDISCONNECTOR\n\t,TOGGLESWITCH\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcTankTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PREFORMED\n\t,SECTIONAL\n\t,EXPANSION\n\t,PRESSUREVESSEL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcTendonTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(STRAND\n\t,WIRE\n\t,BAR\n\t,COATED\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcTextPath",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(LEFT\n\t,RIGHT\n\t,UP\n\t,DOWN)"
      }
    },
    {
      "id": "IfcThermalLoadSourceEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(PEOPLE\n\t,LIGHTING\n\t,EQUIPMENT\n\t,VENTILATIONINDOORAIR\n\t,VENTILATIONOUTSIDEAIR\n\t,RECIRCULATEDAIR\n\t,EXHAUSTAIR\n\t,AIREXCHANGERATE\n\t,DRYBULBTEMPERATURE\n\t,RELATIVEHUMIDITY\n\t,INFILTRATION\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcThermalLoadTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(SENSIBLE\n\t,LATENT\n\t,RADIANT\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcTimeSeriesDataTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CONTINUOUS\n\t,DISCRETE\n\t,DISCRETEBINARY\n\t,PIECEWISEBINARY\n\t,PIECEWISECONSTANT\n\t,PIECEWISECONTINUOUS\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcTimeSeriesScheduleTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ANNUAL\n\t,MONTHLY\n\t,WEEKLY\n\t,DAILY\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcTransformerTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CURRENT\n\t,FREQUENCY\n\t,VOLTAGE\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcTransitionCode",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(DISCONTINUOUS\n\t,CONTINUOUS\n\t,CONTSAMEGRADIENT\n\t,CONTSAMEGRADIENTSAMECURVATURE)"
      }
    },
    {
      "id": "IfcTransportElementTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ELEVATOR\n\t,ESCALATOR\n\t,MOVINGWALKWAY\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcTrimmingPreference",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(CARTESIAN\n\t,PARAMETER\n\t,UNSPECIFIED)"
      }
    },
    {
      "id": "IfcTubeBundleTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FINNED\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcUnitEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ABSORBEDDOSEUNIT\n\t,AMOUNTOFSUBSTANCEUNIT\n\t,AREAUNIT\n\t,DOSEEQUIVALENTUNIT\n\t,ELECTRICCAPACITANCEUNIT\n\t,ELECTRICCHARGEUNIT\n\t,ELECTRICCONDUCTANCEUNIT\n\t,ELECTRICCURRENTUNIT\n\t,ELECTRICRESISTANCEUNIT\n\t,ELECTRICVOLTAGEUNIT\n\t,ENERGYUNIT\n\t,FORCEUNIT\n\t,FREQUENCYUNIT\n\t,ILLUMINANCEUNIT\n\t,INDUCTANCEUNIT\n\t,LENGTHUNIT\n\t,LUMINOUSFLUXUNIT\n\t,LUMINOUSINTENSITYUNIT\n\t,MAGNETICFLUXDENSITYUNIT\n\t,MAGNETICFLUXUNIT\n\t,MASSUNIT\n\t,PLANEANGLEUNIT\n\t,POWERUNIT\n\t,PRESSUREUNIT\n\t,RADIOACTIVITYUNIT\n\t,SOLIDANGLEUNIT\n\t,THERMODYNAMICTEMPERATUREUNIT\n\t,TIMEUNIT\n\t,VOLUMEUNIT\n\t,USERDEFINED)"
      }
    },
    {
      "id": "IfcUnitaryEquipmentTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(AIRHANDLER\n\t,AIRCONDITIONINGUNIT\n\t,SPLITSYSTEM\n\t,ROOFTOPUNIT\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcValveTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(AIRRELEASE\n\t,ANTIVACUUM\n\t,CHANGEOVER\n\t,CHECK\n\t,COMMISSIONING\n\t,DIVERTING\n\t,DRAWOFFCOCK\n\t,DOUBLECHECK\n\t,DOUBLEREGULATING\n\t,FAUCET\n\t,FLUSHING\n\t,GASCOCK\n\t,GASTAP\n\t,ISOLATING\n\t,MIXING\n\t,PRESSUREREDUCING\n\t,PRESSURERELIEF\n\t,REGULATING\n\t,SAFETYCUTOFF\n\t,STEAMTRAP\n\t,STOPCOCK\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcVibrationIsolatorTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(COMPRESSION\n\t,SPRING\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcWallTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(STANDARD\n\t,POLYGONAL\n\t,SHEAR\n\t,ELEMENTEDWALL\n\t,PLUMBINGWALL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcWasteTerminalTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(FLOORTRAP\n\t,FLOORWASTE\n\t,GULLYSUMP\n\t,GULLYTRAP\n\t,GREASEINTERCEPTOR\n\t,OILINTERCEPTOR\n\t,PETROLINTERCEPTOR\n\t,ROOFDRAIN\n\t,WASTEDISPOSALUNIT\n\t,WASTETRAP\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcWindowPanelOperationEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(SIDEHUNGRIGHTHAND\n\t,SIDEHUNGLEFTHAND\n\t,TILTANDTURNRIGHTHAND\n\t,TILTANDTURNLEFTHAND\n\t,TOPHUNG\n\t,BOTTOMHUNG\n\t,PIVOTHORIZONTAL\n\t,PIVOTVERTICAL\n\t,SLIDINGHORIZONTAL\n\t,SLIDINGVERTICAL\n\t,REMOVABLECASEMENT\n\t,FIXEDCASEMENT\n\t,OTHEROPERATION\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcWindowPanelPositionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(LEFT\n\t,MIDDLE\n\t,RIGHT\n\t,BOTTOM\n\t,TOP\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcWindowStyleConstructionEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ALUMINIUM\n\t,HIGH_GRADE_STEEL\n\t,STEEL\n\t,WOOD\n\t,ALUMINIUM_WOOD\n\t,PLASTIC\n\t,OTHER_CONSTRUCTION\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcWindowStyleOperationEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(SINGLE_PANEL\n\t,DOUBLE_PANEL_VERTICAL\n\t,DOUBLE_PANEL_HORIZONTAL\n\t,TRIPLE_PANEL_VERTICAL\n\t,TRIPLE_PANEL_BOTTOM\n\t,TRIPLE_PANEL_TOP\n\t,TRIPLE_PANEL_LEFT\n\t,TRIPLE_PANEL_RIGHT\n\t,TRIPLE_PANEL_HORIZONTAL\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcWorkControlTypeEnum",
      "group": 2,
      "details": {
        "definition": "ENUMERATION OF\n\t(ACTUAL\n\t,BASELINE\n\t,PLANNED\n\t,USERDEFINED\n\t,NOTDEFINED)"
      }
    },
    {
      "id": "IfcActorSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcOrganization\n\t,IfcPerson\n\t,IfcPersonAndOrganization)"
      }
    },
    {
      "id": "IfcAppliedValueSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcRatioMeasure\n\t,IfcMeasureWithUnit\n\t,IfcMonetaryMeasure)"
      }
    },
    {
      "id": "IfcAxis2Placement",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcAxis2Placement2D\n\t,IfcAxis2Placement3D)"
      }
    },
    {
      "id": "IfcBooleanOperand",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcSolidModel\n\t,IfcHalfSpaceSolid\n\t,IfcBooleanResult\n\t,IfcCsgPrimitive3D)"
      }
    },
    {
      "id": "IfcCharacterStyleSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcTextStyleForDefinedFont)"
      }
    },
    {
      "id": "IfcClassificationNotationSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcClassificationNotation\n\t,IfcClassificationReference)"
      }
    },
    {
      "id": "IfcColour",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcColourSpecification\n\t,IfcPreDefinedColour)"
      }
    },
    {
      "id": "IfcColourOrFactor",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcColourRgb\n\t,IfcNormalisedRatioMeasure)"
      }
    },
    {
      "id": "IfcConditionCriterionSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcLabel\n\t,IfcMeasureWithUnit)"
      }
    },
    {
      "id": "IfcCsgSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcBooleanResult\n\t,IfcCsgPrimitive3D)"
      }
    },
    {
      "id": "IfcCurveFontOrScaledCurveFontSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcCurveStyleFontSelect\n\t,IfcCurveStyleFontAndScaling)"
      }
    },
    {
      "id": "IfcCurveOrEdgeCurve",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcBoundedCurve\n\t,IfcEdgeCurve)"
      }
    },
    {
      "id": "IfcCurveStyleFontSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcPreDefinedCurveFont\n\t,IfcCurveStyleFont)"
      }
    },
    {
      "id": "IfcDateTimeSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcCalendarDate\n\t,IfcLocalTime\n\t,IfcDateAndTime)"
      }
    },
    {
      "id": "IfcDefinedSymbolSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcPreDefinedSymbol\n\t,IfcExternallyDefinedSymbol)"
      }
    },
    {
      "id": "IfcDerivedMeasureValue",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcVolumetricFlowRateMeasure\n\t,IfcTimeStamp\n\t,IfcThermalTransmittanceMeasure\n\t,IfcThermalResistanceMeasure\n\t,IfcThermalAdmittanceMeasure\n\t,IfcPressureMeasure\n\t,IfcPowerMeasure\n\t,IfcMassFlowRateMeasure\n\t,IfcMassDensityMeasure\n\t,IfcLinearVelocityMeasure\n\t,IfcKinematicViscosityMeasure\n\t,IfcIntegerCountRateMeasure\n\t,IfcHeatFluxDensityMeasure\n\t,IfcFrequencyMeasure\n\t,IfcEnergyMeasure\n\t,IfcElectricVoltageMeasure\n\t,IfcDynamicViscosityMeasure\n\t,IfcCompoundPlaneAngleMeasure\n\t,IfcAngularVelocityMeasure\n\t,IfcThermalConductivityMeasure\n\t,IfcMolecularWeightMeasure\n\t,IfcVaporPermeabilityMeasure\n\t,IfcMoistureDiffusivityMeasure\n\t,IfcIsothermalMoistureCapacityMeasure\n\t,IfcSpecificHeatCapacityMeasure\n\t,IfcMonetaryMeasure\n\t,IfcMagneticFluxDensityMeasure\n\t,IfcMagneticFluxMeasure\n\t,IfcLuminousFluxMeasure\n\t,IfcForceMeasure\n\t,IfcInductanceMeasure\n\t,IfcIlluminanceMeasure\n\t,IfcElectricResistanceMeasure\n\t,IfcElectricConductanceMeasure\n\t,IfcElectricChargeMeasure\n\t,IfcDoseEquivalentMeasure\n\t,IfcElectricCapacitanceMeasure\n\t,IfcAbsorbedDoseMeasure\n\t,IfcRadioActivityMeasure\n\t,IfcRotationalFrequencyMeasure\n\t,IfcTorqueMeasure\n\t,IfcAccelerationMeasure\n\t,IfcLinearForceMeasure\n\t,IfcLinearStiffnessMeasure\n\t,IfcModulusOfSubgradeReactionMeasure\n\t,IfcModulusOfElasticityMeasure\n\t,IfcMomentOfInertiaMeasure\n\t,IfcPlanarForceMeasure\n\t,IfcRotationalStiffnessMeasure\n\t,IfcShearModulusMeasure\n\t,IfcLinearMomentMeasure\n\t,IfcLuminousIntensityDistributionMeasure\n\t,IfcCurvatureMeasure\n\t,IfcMassPerLengthMeasure\n\t,IfcModulusOfLinearSubgradeReactionMeasure\n\t,IfcModulusOfRotationalSubgradeReactionMeasure\n\t,IfcRotationalMassMeasure\n\t,IfcSectionalAreaIntegralMeasure\n\t,IfcSectionModulusMeasure\n\t,IfcTemperatureGradientMeasure\n\t,IfcThermalExpansionCoefficientMeasure\n\t,IfcWarpingConstantMeasure\n\t,IfcWarpingMomentMeasure\n\t,IfcSoundPowerMeasure\n\t,IfcSoundPressureMeasure\n\t,IfcHeatingValueMeasure\n\t,IfcPHMeasure\n\t,IfcIonConcentrationMeasure)"
      }
    },
    {
      "id": "IfcDocumentSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcDocumentReference\n\t,IfcDocumentInformation)"
      }
    },
    {
      "id": "IfcDraughtingCalloutElement",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcAnnotationCurveOccurrence\n\t,IfcAnnotationTextOccurrence\n\t,IfcAnnotationSymbolOccurrence)"
      }
    },
    {
      "id": "IfcFillAreaStyleTileShapeSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcFillAreaStyleTileSymbolWithStyle)"
      }
    },
    {
      "id": "IfcFillStyleSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcFillAreaStyleHatching\n\t,IfcFillAreaStyleTiles\n\t,IfcColour\n\t,IfcExternallyDefinedHatchStyle)"
      }
    },
    {
      "id": "IfcGeometricSetSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcPoint\n\t,IfcCurve\n\t,IfcSurface)"
      }
    },
    {
      "id": "IfcHatchLineDistanceSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcOneDirectionRepeatFactor\n\t,IfcPositiveLengthMeasure)"
      }
    },
    {
      "id": "IfcLayeredItem",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcRepresentationItem\n\t,IfcRepresentation)"
      }
    },
    {
      "id": "IfcLibrarySelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcLibraryReference\n\t,IfcLibraryInformation)"
      }
    },
    {
      "id": "IfcLightDistributionDataSourceSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcExternalReference\n\t,IfcLightIntensityDistribution)"
      }
    },
    {
      "id": "IfcMaterialSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcMaterial\n\t,IfcMaterialList\n\t,IfcMaterialLayerSetUsage\n\t,IfcMaterialLayerSet\n\t,IfcMaterialLayer)"
      }
    },
    {
      "id": "IfcMeasureValue",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcVolumeMeasure\n\t,IfcTimeMeasure\n\t,IfcThermodynamicTemperatureMeasure\n\t,IfcSolidAngleMeasure\n\t,IfcPositiveRatioMeasure\n\t,IfcRatioMeasure\n\t,IfcPositivePlaneAngleMeasure\n\t,IfcPlaneAngleMeasure\n\t,IfcParameterValue\n\t,IfcNumericMeasure\n\t,IfcMassMeasure\n\t,IfcPositiveLengthMeasure\n\t,IfcLengthMeasure\n\t,IfcElectricCurrentMeasure\n\t,IfcDescriptiveMeasure\n\t,IfcCountMeasure\n\t,IfcContextDependentMeasure\n\t,IfcAreaMeasure\n\t,IfcAmountOfSubstanceMeasure\n\t,IfcLuminousIntensityMeasure\n\t,IfcNormalisedRatioMeasure\n\t,IfcComplexNumber)"
      }
    },
    {
      "id": "IfcMetricValueSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcDateTimeSelect\n\t,IfcMeasureWithUnit\n\t,IfcTable\n\t,IfcText\n\t,IfcTimeSeries\n\t,IfcCostValue)"
      }
    },
    {
      "id": "IfcObjectReferenceSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcMaterial\n\t,IfcPerson\n\t,IfcDateAndTime\n\t,IfcMaterialList\n\t,IfcOrganization\n\t,IfcCalendarDate\n\t,IfcLocalTime\n\t,IfcPersonAndOrganization\n\t,IfcMaterialLayer\n\t,IfcExternalReference\n\t,IfcTimeSeries\n\t,IfcAddress\n\t,IfcAppliedValue)"
      }
    },
    {
      "id": "IfcOrientationSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcPlaneAngleMeasure\n\t,IfcDirection)"
      }
    },
    {
      "id": "IfcPointOrVertexPoint",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcPoint\n\t,IfcVertexPoint)"
      }
    },
    {
      "id": "IfcPresentationStyleSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcNullStyle\n\t,IfcCurveStyle\n\t,IfcSymbolStyle\n\t,IfcFillAreaStyle\n\t,IfcTextStyle\n\t,IfcSurfaceStyle)"
      }
    },
    {
      "id": "IfcShell",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcClosedShell\n\t,IfcOpenShell)"
      }
    },
    {
      "id": "IfcSimpleValue",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcInteger\n\t,IfcReal\n\t,IfcBoolean\n\t,IfcIdentifier\n\t,IfcText\n\t,IfcLabel\n\t,IfcLogical)"
      }
    },
    {
      "id": "IfcSizeSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcRatioMeasure\n\t,IfcLengthMeasure\n\t,IfcDescriptiveMeasure\n\t,IfcPositiveLengthMeasure\n\t,IfcNormalisedRatioMeasure\n\t,IfcPositiveRatioMeasure)"
      }
    },
    {
      "id": "IfcSpecularHighlightSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcSpecularExponent\n\t,IfcSpecularRoughness)"
      }
    },
    {
      "id": "IfcStructuralActivityAssignmentSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcStructuralItem\n\t,IfcElement)"
      }
    },
    {
      "id": "IfcSurfaceOrFaceSurface",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcSurface\n\t,IfcFaceSurface\n\t,IfcFaceBasedSurfaceModel)"
      }
    },
    {
      "id": "IfcSurfaceStyleElementSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcSurfaceStyleShading\n\t,IfcSurfaceStyleLighting\n\t,IfcSurfaceStyleWithTextures\n\t,IfcExternallyDefinedSurfaceStyle\n\t,IfcSurfaceStyleRefraction)"
      }
    },
    {
      "id": "IfcSymbolStyleSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcColour)"
      }
    },
    {
      "id": "IfcTextFontSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcPreDefinedTextFont\n\t,IfcExternallyDefinedTextFont)"
      }
    },
    {
      "id": "IfcTextStyleSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcTextStyleWithBoxCharacteristics\n\t,IfcTextStyleTextModel)"
      }
    },
    {
      "id": "IfcTrimmingSelect",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcCartesianPoint\n\t,IfcParameterValue)"
      }
    },
    {
      "id": "IfcUnit",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcDerivedUnit\n\t,IfcNamedUnit\n\t,IfcMonetaryUnit)"
      }
    },
    {
      "id": "IfcValue",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcMeasureValue\n\t,IfcSimpleValue\n\t,IfcDerivedMeasureValue)"
      }
    },
    {
      "id": "IfcVectorOrDirection",
      "group": 2,
      "details": {
        "definition": "SELECT\n\t(IfcDirection\n\t,IfcVector)"
      }
    }
  ],
  "links": [
    {
      "source": "IfcBoxAlignment",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcNormalisedRatioMeasure",
      "target": "IfcRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcPositiveLengthMeasure",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcPositivePlaneAngleMeasure",
      "target": "IfcPlaneAngleMeasure",
      "value": 1
    },
    {
      "source": "IfcPositiveRatioMeasure",
      "target": "IfcRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcBoxAlignment",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcNormalisedRatioMeasure",
      "target": "IfcRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcPositiveLengthMeasure",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcPositivePlaneAngleMeasure",
      "target": "IfcPlaneAngleMeasure",
      "value": 1
    },
    {
      "source": "IfcPositiveRatioMeasure",
      "target": "IfcRatioMeasure",
      "value": 1
    }
  ]
}