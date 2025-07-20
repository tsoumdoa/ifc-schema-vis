export default {
  "nodes": [
    {
      "id": "Ifc2DCompositeCurve",
      "group": 1,
      "details": {
        "definition": " Ifc2DCompositeCurve\n SUBTYPE OF (IfcCompositeCurve);\n WHERE\n\tWR1 : SELF\\IfcCompositeCurve.ClosedCurve;\n\tWR2 : SELF\\IfcCurve.Dim = 2;\n"
      }
    },
    {
      "id": "IfcCompositeCurve",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcActionRequest",
      "group": 1,
      "details": {
        "definition": " IfcActionRequest\n SUBTYPE OF (IfcControl);\n\tRequestID : IfcIdentifier;\n UNIQUE\n\tUR2 : RequestID;\n"
      }
    },
    {
      "id": "IfcControl",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcIdentifier",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcActor",
      "group": 1,
      "details": {
        "definition": " IfcActor\n SUPERTYPE OF (ONEOF\n\t(IfcOccupant))\n SUBTYPE OF (IfcObject);\n\tTheActor : IfcActorSelect;\n INVERSE\n\tIsActingUpon : SET [0:?] OF IfcRelAssignsToActor FOR RelatingActor;\n"
      }
    },
    {
      "id": "IfcObject",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcActorSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcActorRole",
      "group": 1,
      "details": {
        "definition": " IfcActorRole;\n\tRole : IfcRoleEnum;\n\tUserDefinedRole : OPTIONAL IfcLabel;\n\tDescription : OPTIONAL IfcText;\n WHERE\n\tWR1 : (Role <> IfcRoleEnum.USERDEFINED) OR\n            ((Role = IfcRoleEnum.USERDEFINED) AND\n              EXISTS(SELF.UserDefinedRole));\n"
      }
    },
    {
      "id": "IfcRoleEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcActuatorType",
      "group": 1,
      "details": {
        "definition": " IfcActuatorType\n SUBTYPE OF (IfcDistributionControlElementType);\n\tPredefinedType : IfcActuatorTypeEnum;\n"
      }
    },
    {
      "id": "IfcDistributionControlElementType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcActuatorTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAddress",
      "group": 1,
      "details": {
        "definition": " IfcAddress\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcPostalAddress\n\t,IfcTelecomAddress));\n\tPurpose : OPTIONAL IfcAddressTypeEnum;\n\tDescription : OPTIONAL IfcText;\n\tUserDefinedPurpose : OPTIONAL IfcLabel;\n INVERSE\n\tOfPerson : SET [0:?] OF IfcPerson FOR Addresses;\n\tOfOrganization : SET [0:?] OF IfcOrganization FOR Addresses;\n WHERE\n\tWR1 : (NOT(EXISTS(Purpose))) OR\n            ((Purpose <> IfcAddressTypeEnum.USERDEFINED) OR\n            ((Purpose = IfcAddressTypeEnum.USERDEFINED) AND\n              EXISTS(SELF.UserDefinedPurpose)));\n"
      }
    },
    {
      "id": "IfcAirTerminalBoxType",
      "group": 1,
      "details": {
        "definition": " IfcAirTerminalBoxType\n SUBTYPE OF (IfcFlowControllerType);\n\tPredefinedType : IfcAirTerminalBoxTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcAirTerminalBoxTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcAirTerminalBoxTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcFlowControllerType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcAirTerminalBoxTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAirTerminalType",
      "group": 1,
      "details": {
        "definition": " IfcAirTerminalType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcAirTerminalTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcAirTerminalTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcAirTerminalTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcFlowTerminalType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcAirTerminalTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAirToAirHeatRecoveryType",
      "group": 1,
      "details": {
        "definition": " IfcAirToAirHeatRecoveryType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcAirToAirHeatRecoveryTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcAirToAirHeatRecoveryTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcAirToAirHeatRecoveryTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcEnergyConversionDeviceType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcAirToAirHeatRecoveryTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAlarmType",
      "group": 1,
      "details": {
        "definition": " IfcAlarmType\n SUBTYPE OF (IfcDistributionControlElementType);\n\tPredefinedType : IfcAlarmTypeEnum;\n"
      }
    },
    {
      "id": "IfcAlarmTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAngularDimension",
      "group": 1,
      "details": {
        "definition": " IfcAngularDimension\n SUBTYPE OF (IfcDimensionCurveDirectedCallout);\n"
      }
    },
    {
      "id": "IfcDimensionCurveDirectedCallout",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcAnnotation",
      "group": 1,
      "details": {
        "definition": " IfcAnnotation\n SUBTYPE OF (IfcProduct);\n INVERSE\n\tContainedInStructure : SET [0:1] OF IfcRelContainedInSpatialStructure FOR RelatedElements;\n"
      }
    },
    {
      "id": "IfcProduct",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcAnnotationCurveOccurrence",
      "group": 1,
      "details": {
        "definition": " IfcAnnotationCurveOccurrence\n SUPERTYPE OF (ONEOF\n\t(IfcDimensionCurve\n\t,IfcProjectionCurve))\n SUBTYPE OF (IfcAnnotationOccurrence);\n WHERE\n\tWR31 : NOT(EXISTS(SELF\\IfcStyledItem.Item)) OR\n             ('IFC2X3.IFCCURVE' IN TYPEOF (SELF\\IfcStyledItem.Item));\n"
      }
    },
    {
      "id": "IfcAnnotationOccurrence",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcAnnotationFillArea",
      "group": 1,
      "details": {
        "definition": " IfcAnnotationFillArea\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tOuterBoundary : IfcCurve;\n\tInnerBoundaries : OPTIONAL SET [1:?] OF IfcCurve;\n"
      }
    },
    {
      "id": "IfcGeometricRepresentationItem",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCurve",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAnnotationFillAreaOccurrence",
      "group": 1,
      "details": {
        "definition": " IfcAnnotationFillAreaOccurrence\n SUBTYPE OF (IfcAnnotationOccurrence);\n\tFillStyleTarget : OPTIONAL IfcPoint;\n\tGlobalOrLocal : OPTIONAL IfcGlobalOrLocalEnum;\n WHERE\n\tWR31 : NOT(EXISTS(SELF\\IfcStyledItem.Item)) OR\n             ('IFC2X3.IFCANNOTATIONFILLAREA' IN TYPEOF (SELF\\IfcStyledItem.Item));\n"
      }
    },
    {
      "id": "IfcStyledItem",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcAnnotationSurface",
      "group": 1,
      "details": {
        "definition": " IfcAnnotationSurface\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tItem : IfcGeometricRepresentationItem;\n\tTextureCoordinates : OPTIONAL IfcTextureCoordinate;\n WHERE\n\tWR01 : SIZEOF([\n               'IFC2X3.IFCSURFACE',\n               'IFC2X3.IFCSHELLBASEDSURFACEMODEL',\n               'IFC2X3.IFCFACEBASEDSURFACEMODEL',\n               'IFC2X3.IFCSOLIDMODEL',\n               'IFC2X3.IFCBOOLEANRESULT',\n               'IFC2X3.IFCCSGPRIMITIVE3D'] \n              * TYPEOF(Item)\n               ) >= 1;\n"
      }
    },
    {
      "id": "IfcAnnotationSurfaceOccurrence",
      "group": 1,
      "details": {
        "definition": " IfcAnnotationSurfaceOccurrence\n SUBTYPE OF (IfcAnnotationOccurrence);\n WHERE\n\tWR31 : NOT(EXISTS(SELF\\IfcStyledItem.Item)) OR \n             (SIZEOF(\n              ['IFC2X3.IFCSURFACE',\n               'IFC2X3.IFCFACEBASEDSURFACEMODEL',\n               'IFC2X3.IFCSHELLBASEDSURFACEMODEL',\n               'IFC2X3.IFCSOLIDMODEL'] *\n              TYPEOF(SELF\\IfcStyledItem.Item)) > 0);\n"
      }
    },
    {
      "id": "IfcAnnotationSymbolOccurrence",
      "group": 1,
      "details": {
        "definition": " IfcAnnotationSymbolOccurrence\n SUPERTYPE OF (ONEOF\n\t(IfcTerminatorSymbol))\n SUBTYPE OF (IfcAnnotationOccurrence);\n WHERE\n\tWR31 : NOT(EXISTS(SELF\\IfcStyledItem.Item)) OR\n             ('IFC2X3.IFCDEFINEDSYMBOL' IN TYPEOF (SELF\\IfcStyledItem.Item));\n"
      }
    },
    {
      "id": "IfcAnnotationTextOccurrence",
      "group": 1,
      "details": {
        "definition": " IfcAnnotationTextOccurrence\n SUBTYPE OF (IfcAnnotationOccurrence);\n WHERE\n\tWR31 : NOT(EXISTS(SELF\\IfcStyledItem.Item)) OR\n             ('IFC2X3.IFCTEXTLITERAL' IN TYPEOF (SELF\\IfcStyledItem.Item));\n"
      }
    },
    {
      "id": "IfcApplication",
      "group": 1,
      "details": {
        "definition": " IfcApplication;\n\tApplicationDeveloper : IfcOrganization;\n\tVersion : IfcLabel;\n\tApplicationFullName : IfcLabel;\n\tApplicationIdentifier : IfcIdentifier;\n UNIQUE\n\tUR1 : ApplicationIdentifier;\n\tUR2 : ApplicationFullName, Version;\n"
      }
    },
    {
      "id": "IfcOrganization",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLabel",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAppliedValue",
      "group": 1,
      "details": {
        "definition": " IfcAppliedValue\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcCostValue\n\t,IfcEnvironmentalImpactValue));\n\tName : OPTIONAL IfcLabel;\n\tDescription : OPTIONAL IfcText;\n\tAppliedValue : OPTIONAL IfcAppliedValueSelect;\n\tUnitBasis : OPTIONAL IfcMeasureWithUnit;\n\tApplicableDate : OPTIONAL IfcDateTimeSelect;\n\tFixedUntilDate : OPTIONAL IfcDateTimeSelect;\n INVERSE\n\tValuesReferenced : SET [0:?] OF IfcReferencesValueDocument FOR ReferencingValues;\n\tValueOfComponents : SET [0:?] OF IfcAppliedValueRelationship FOR ComponentOfTotal;\n\tIsComponentIn : SET [0:?] OF IfcAppliedValueRelationship FOR Components;\n WHERE\n\tWR1 : EXISTS (AppliedValue) OR \n            EXISTS (ValueOfComponents);\n"
      }
    },
    {
      "id": "IfcAppliedValueRelationship",
      "group": 1,
      "details": {
        "definition": " IfcAppliedValueRelationship;\n\tComponentOfTotal : IfcAppliedValue;\n\tComponents : SET [1:?] OF IfcAppliedValue;\n\tArithmeticOperator : IfcArithmeticOperatorEnum;\n\tName : OPTIONAL IfcLabel;\n\tDescription : OPTIONAL IfcText;\n"
      }
    },
    {
      "id": "IfcArithmeticOperatorEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcApproval",
      "group": 1,
      "details": {
        "definition": " IfcApproval;\n\tDescription : OPTIONAL IfcText;\n\tApprovalDateTime : IfcDateTimeSelect;\n\tApprovalStatus : OPTIONAL IfcLabel;\n\tApprovalLevel : OPTIONAL IfcLabel;\n\tApprovalQualifier : OPTIONAL IfcText;\n\tName : IfcLabel;\n\tIdentifier : IfcIdentifier;\n INVERSE\n\tActors : SET [0:?] OF IfcApprovalActorRelationship FOR Approval;\n\tIsRelatedWith : SET [0:?] OF IfcApprovalRelationship FOR RelatedApproval;\n\tRelates : SET [0:?] OF IfcApprovalRelationship FOR RelatingApproval;\n"
      }
    },
    {
      "id": "IfcDateTimeSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcApprovalActorRelationship",
      "group": 1,
      "details": {
        "definition": " IfcApprovalActorRelationship;\n\tActor : IfcActorSelect;\n\tApproval : IfcApproval;\n\tRole : IfcActorRole;\n"
      }
    },
    {
      "id": "IfcApprovalPropertyRelationship",
      "group": 1,
      "details": {
        "definition": " IfcApprovalPropertyRelationship;\n\tApprovedProperties : SET [1:?] OF IfcProperty;\n\tApproval : IfcApproval;\n"
      }
    },
    {
      "id": "IfcApprovalRelationship",
      "group": 1,
      "details": {
        "definition": " IfcApprovalRelationship;\n\tRelatedApproval : IfcApproval;\n\tRelatingApproval : IfcApproval;\n\tDescription : OPTIONAL IfcText;\n\tName : IfcLabel;\n"
      }
    },
    {
      "id": "IfcArbitraryClosedProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcArbitraryClosedProfileDef\n SUPERTYPE OF (ONEOF\n\t(IfcArbitraryProfileDefWithVoids))\n SUBTYPE OF (IfcProfileDef);\n\tOuterCurve : IfcCurve;\n WHERE\n\tWR1 : OuterCurve.Dim = 2;\n\tWR2 : NOT('IFC2X3.IFCLINE' IN TYPEOF(OuterCurve));\n\tWR3 : NOT('IFC2X3.IFCOFFSETCURVE2D' IN TYPEOF(OuterCurve));\n"
      }
    },
    {
      "id": "IfcProfileDef",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcArbitraryOpenProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcArbitraryOpenProfileDef\n SUPERTYPE OF (ONEOF\n\t(IfcCenterLineProfileDef))\n SUBTYPE OF (IfcProfileDef);\n\tCurve : IfcBoundedCurve;\n WHERE\n\tWR11 : ('IFC2X3.IFCCENTERLINEPROFILEDEF' IN TYPEOF(SELF)) OR \n              (SELF\\IfcProfileDef.ProfileType = IfcProfileTypeEnum.CURVE);\n\tWR12 : Curve.Dim = 2;\n"
      }
    },
    {
      "id": "IfcBoundedCurve",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcArbitraryProfileDefWithVoids",
      "group": 1,
      "details": {
        "definition": " IfcArbitraryProfileDefWithVoids\n SUBTYPE OF (IfcArbitraryClosedProfileDef);\n\tInnerCurves : SET [1:?] OF IfcCurve;\n WHERE\n\tWR1 : SELF\\IfcProfileDef.ProfileType = AREA;\n\tWR2 : SIZEOF(QUERY(temp <* InnerCurves | temp.Dim <> 2)) = 0;\n\tWR3 : SIZEOF(QUERY(temp <* InnerCurves | 'IFC2X3.IFCLINE' IN TYPEOF(temp))) = 0;\n"
      }
    },
    {
      "id": "IfcAsset",
      "group": 1,
      "details": {
        "definition": " IfcAsset\n SUBTYPE OF (IfcGroup);\n\tAssetID : IfcIdentifier;\n\tOriginalValue : IfcCostValue;\n\tCurrentValue : IfcCostValue;\n\tTotalReplacementCost : IfcCostValue;\n\tOwner : IfcActorSelect;\n\tUser : IfcActorSelect;\n\tResponsiblePerson : IfcPerson;\n\tIncorporationDate : IfcCalendarDate;\n\tDepreciatedValue : IfcCostValue;\n WHERE\n\tWR1 : SIZEOF(QUERY(Temp <* SELF\\IfcGroup.IsGroupedBy.RelatedObjects | NOT('IFC2X3.IFCELEMENT' IN TYPEOF(Temp)))) = 0;\n"
      }
    },
    {
      "id": "IfcGroup",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCostValue",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPerson",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCalendarDate",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAsymmetricIShapeProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcAsymmetricIShapeProfileDef\n SUBTYPE OF (IfcIShapeProfileDef);\n\tTopFlangeWidth : IfcPositiveLengthMeasure;\n\tTopFlangeThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tTopFlangeFilletRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tCentreOfGravityInY : OPTIONAL IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcIShapeProfileDef",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcPositiveLengthMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAxis1Placement",
      "group": 1,
      "details": {
        "definition": " IfcAxis1Placement\n SUBTYPE OF (IfcPlacement);\n\tAxis : OPTIONAL IfcDirection;\n DERIVE\n\tZ : IfcDirection := NVL (IfcNormalise(Axis), IfcRepresentationItem() || IfcGeometricRepresentationItem () || IfcDirection([0.0,0.0,1.0]));\n WHERE\n\tWR1 : (NOT (EXISTS (Axis))) OR (Axis.Dim = 3);\n\tWR2 : SELF\\IfcPlacement.Location.Dim = 3;\n"
      }
    },
    {
      "id": "IfcPlacement",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcAxis2Placement2D",
      "group": 1,
      "details": {
        "definition": " IfcAxis2Placement2D\n SUBTYPE OF (IfcPlacement);\n\tRefDirection : OPTIONAL IfcDirection;\n DERIVE\n\tP : LIST [2:2] OF IfcDirection := IfcBuild2Axes(RefDirection);\n WHERE\n\tWR1 : (NOT (EXISTS (RefDirection))) OR (RefDirection.Dim = 2);\n\tWR2 : SELF\\IfcPlacement.Location.Dim = 2;\n"
      }
    },
    {
      "id": "IfcAxis2Placement3D",
      "group": 1,
      "details": {
        "definition": " IfcAxis2Placement3D\n SUBTYPE OF (IfcPlacement);\n\tAxis : OPTIONAL IfcDirection;\n\tRefDirection : OPTIONAL IfcDirection;\n DERIVE\n\tP : LIST [3:3] OF IfcDirection := IfcBuildAxes(Axis, RefDirection);\n WHERE\n\tWR1 : SELF\\IfcPlacement.Location.Dim = 3;\n\tWR2 : (NOT (EXISTS (Axis))) OR (Axis.Dim = 3);\n\tWR3 : (NOT (EXISTS (RefDirection))) OR (RefDirection.Dim = 3);\n\tWR4 : (NOT (EXISTS (Axis))) OR (NOT (EXISTS (RefDirection))) OR (IfcCrossProduct(Axis,RefDirection).Magnitude > 0.0);\n\tWR5 : NOT ((EXISTS (Axis)) XOR (EXISTS (RefDirection)));\n"
      }
    },
    {
      "id": "IfcBSplineCurve",
      "group": 1,
      "details": {
        "definition": " IfcBSplineCurve\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcBezierCurve))\n SUBTYPE OF (IfcBoundedCurve);\n\tDegree : INTEGER;\n\tControlPointsList : LIST [2:?] OF IfcCartesianPoint;\n\tCurveForm : IfcBSplineCurveForm;\n\tClosedCurve : LOGICAL;\n\tSelfIntersect : LOGICAL;\n DERIVE\n\tControlPoints : ARRAY [0:255] OF IfcCartesianPoint := IfcListToArray(ControlPointsList,0,UpperIndexOnControlPoints);\n\tUpperIndexOnControlPoints : INTEGER := (SIZEOF(ControlPointsList) - 1);\n WHERE\n\tWR41 : SIZEOF(QUERY(Temp <* ControlPointsList |\n               Temp.Dim <> ControlPointsList[1].Dim))\n             = 0;\n"
      }
    },
    {
      "id": "IfcBSplineCurveForm",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcBeam",
      "group": 1,
      "details": {
        "definition": " IfcBeam\n SUBTYPE OF (IfcBuildingElement);\n"
      }
    },
    {
      "id": "IfcBuildingElement",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcBeamType",
      "group": 1,
      "details": {
        "definition": " IfcBeamType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcBeamTypeEnum;\n"
      }
    },
    {
      "id": "IfcBuildingElementType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcBeamTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcBezierCurve",
      "group": 1,
      "details": {
        "definition": " IfcBezierCurve\n SUPERTYPE OF (ONEOF\n\t(IfcRationalBezierCurve))\n SUBTYPE OF (IfcBSplineCurve);\n"
      }
    },
    {
      "id": "IfcBlobTexture",
      "group": 1,
      "details": {
        "definition": " IfcBlobTexture\n SUBTYPE OF (IfcSurfaceTexture);\n\tRasterFormat : IfcIdentifier;\n\tRasterCode : BOOLEAN;\n WHERE\n\tWR11 : SELF.RasterFormat IN ['BMP', 'JPG', 'GIF', 'PNG'];\n"
      }
    },
    {
      "id": "IfcSurfaceTexture",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcBlock",
      "group": 1,
      "details": {
        "definition": " IfcBlock\n SUBTYPE OF (IfcCsgPrimitive3D);\n\tXLength : IfcPositiveLengthMeasure;\n\tYLength : IfcPositiveLengthMeasure;\n\tZLength : IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcCsgPrimitive3D",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcBoilerType",
      "group": 1,
      "details": {
        "definition": " IfcBoilerType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcBoilerTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcBoilerTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcBoilerTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcBoilerTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcBooleanClippingResult",
      "group": 1,
      "details": {
        "definition": " IfcBooleanClippingResult\n SUBTYPE OF (IfcBooleanResult);\n WHERE\n\tWR1 : ('IFC2X3.IFCSWEPTAREASOLID' IN TYPEOF(FirstOperand)) OR ('IFC2X3.IFCBOOLEANCLIPPINGRESULT' IN TYPEOF(FirstOperand));\n\tWR2 : ('IFC2X3.IFCHALFSPACESOLID' IN TYPEOF(SecondOperand));\n\tWR3 : Operator = DIFFERENCE;\n"
      }
    },
    {
      "id": "IfcBooleanResult",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcBooleanOperator",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcBooleanOperand",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcBoundaryCondition",
      "group": 1,
      "details": {
        "definition": " IfcBoundaryCondition\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcBoundaryEdgeCondition\n\t,IfcBoundaryFaceCondition\n\t,IfcBoundaryNodeCondition));\n\tName : OPTIONAL IfcLabel;\n"
      }
    },
    {
      "id": "IfcBoundaryEdgeCondition",
      "group": 1,
      "details": {
        "definition": " IfcBoundaryEdgeCondition\n SUBTYPE OF (IfcBoundaryCondition);\n\tLinearStiffnessByLengthX : OPTIONAL IfcModulusOfLinearSubgradeReactionMeasure;\n\tLinearStiffnessByLengthY : OPTIONAL IfcModulusOfLinearSubgradeReactionMeasure;\n\tLinearStiffnessByLengthZ : OPTIONAL IfcModulusOfLinearSubgradeReactionMeasure;\n\tRotationalStiffnessByLengthX : OPTIONAL IfcModulusOfRotationalSubgradeReactionMeasure;\n\tRotationalStiffnessByLengthY : OPTIONAL IfcModulusOfRotationalSubgradeReactionMeasure;\n\tRotationalStiffnessByLengthZ : OPTIONAL IfcModulusOfRotationalSubgradeReactionMeasure;\n"
      }
    },
    {
      "id": "IfcBoundaryFaceCondition",
      "group": 1,
      "details": {
        "definition": " IfcBoundaryFaceCondition\n SUBTYPE OF (IfcBoundaryCondition);\n\tLinearStiffnessByAreaX : OPTIONAL IfcModulusOfSubgradeReactionMeasure;\n\tLinearStiffnessByAreaY : OPTIONAL IfcModulusOfSubgradeReactionMeasure;\n\tLinearStiffnessByAreaZ : OPTIONAL IfcModulusOfSubgradeReactionMeasure;\n"
      }
    },
    {
      "id": "IfcBoundaryNodeCondition",
      "group": 1,
      "details": {
        "definition": " IfcBoundaryNodeCondition\n SUPERTYPE OF (ONEOF\n\t(IfcBoundaryNodeConditionWarping))\n SUBTYPE OF (IfcBoundaryCondition);\n\tLinearStiffnessX : OPTIONAL IfcLinearStiffnessMeasure;\n\tLinearStiffnessY : OPTIONAL IfcLinearStiffnessMeasure;\n\tLinearStiffnessZ : OPTIONAL IfcLinearStiffnessMeasure;\n\tRotationalStiffnessX : OPTIONAL IfcRotationalStiffnessMeasure;\n\tRotationalStiffnessY : OPTIONAL IfcRotationalStiffnessMeasure;\n\tRotationalStiffnessZ : OPTIONAL IfcRotationalStiffnessMeasure;\n"
      }
    },
    {
      "id": "IfcBoundaryNodeConditionWarping",
      "group": 1,
      "details": {
        "definition": " IfcBoundaryNodeConditionWarping\n SUBTYPE OF (IfcBoundaryNodeCondition);\n\tWarpingStiffness : OPTIONAL IfcWarpingMomentMeasure;\n"
      }
    },
    {
      "id": "IfcBoundedSurface",
      "group": 1,
      "details": {
        "definition": " IfcBoundedSurface\n SUPERTYPE OF (ONEOF\n\t(IfcCurveBoundedPlane\n\t,IfcRectangularTrimmedSurface))\n SUBTYPE OF (IfcSurface);\n"
      }
    },
    {
      "id": "IfcSurface",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcBoundingBox",
      "group": 1,
      "details": {
        "definition": " IfcBoundingBox\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tCorner : IfcCartesianPoint;\n\tXDim : IfcPositiveLengthMeasure;\n\tYDim : IfcPositiveLengthMeasure;\n\tZDim : IfcPositiveLengthMeasure;\n DERIVE\n\tDim : IfcDimensionCount := 3;\n"
      }
    },
    {
      "id": "IfcCartesianPoint",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcBoxedHalfSpace",
      "group": 1,
      "details": {
        "definition": " IfcBoxedHalfSpace\n SUBTYPE OF (IfcHalfSpaceSolid);\n\tEnclosure : IfcBoundingBox;\n WHERE\n\tWR1 : NOT ('IFC2X3.IFCCURVEBOUNDEDPLANE' IN TYPEOF(SELF\\IfcHalfSpaceSolid.BaseSurface));\n"
      }
    },
    {
      "id": "IfcHalfSpaceSolid",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcBuilding",
      "group": 1,
      "details": {
        "definition": " IfcBuilding\n SUBTYPE OF (IfcSpatialStructureElement);\n\tElevationOfRefHeight : OPTIONAL IfcLengthMeasure;\n\tElevationOfTerrain : OPTIONAL IfcLengthMeasure;\n\tBuildingAddress : OPTIONAL IfcPostalAddress;\n"
      }
    },
    {
      "id": "IfcSpatialStructureElement",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcElement",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcBuildingElementComponent",
      "group": 1,
      "details": {
        "definition": " IfcBuildingElementComponent\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcBuildingElementPart\n\t,IfcReinforcingElement))\n SUBTYPE OF (IfcBuildingElement);\n"
      }
    },
    {
      "id": "IfcBuildingElementPart",
      "group": 1,
      "details": {
        "definition": " IfcBuildingElementPart\n SUBTYPE OF (IfcBuildingElementComponent);\n"
      }
    },
    {
      "id": "IfcBuildingElementProxy",
      "group": 1,
      "details": {
        "definition": " IfcBuildingElementProxy\n SUBTYPE OF (IfcBuildingElement);\n\tCompositionType : OPTIONAL IfcElementCompositionEnum;\n WHERE\n\tWR1 : EXISTS(SELF\\IfcRoot.Name);\n"
      }
    },
    {
      "id": "IfcBuildingElementProxyType",
      "group": 1,
      "details": {
        "definition": " IfcBuildingElementProxyType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcBuildingElementProxyTypeEnum;\n"
      }
    },
    {
      "id": "IfcBuildingElementProxyTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElementType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcBuildingStorey",
      "group": 1,
      "details": {
        "definition": " IfcBuildingStorey\n SUBTYPE OF (IfcSpatialStructureElement);\n\tElevation : OPTIONAL IfcLengthMeasure;\n"
      }
    },
    {
      "id": "IfcCShapeProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcCShapeProfileDef\n SUBTYPE OF (IfcParameterizedProfileDef);\n\tDepth : IfcPositiveLengthMeasure;\n\tWidth : IfcPositiveLengthMeasure;\n\tWallThickness : IfcPositiveLengthMeasure;\n\tGirth : IfcPositiveLengthMeasure;\n\tInternalFilletRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tCentreOfGravityInX : OPTIONAL IfcPositiveLengthMeasure;\n WHERE\n\tWR1 : Girth < (Depth / 2.);\n\tWR2 : NOT(EXISTS(InternalFilletRadius)) OR\n            ((InternalFilletRadius <= Width/2.) AND (InternalFilletRadius <= Depth/2.));\n\tWR3 : (WallThickness < Width/2.) AND (WallThickness < Depth/2.);\n"
      }
    },
    {
      "id": "IfcParameterizedProfileDef",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCableCarrierFittingType",
      "group": 1,
      "details": {
        "definition": " IfcCableCarrierFittingType\n SUBTYPE OF (IfcFlowFittingType);\n\tPredefinedType : IfcCableCarrierFittingTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcCableCarrierFittingTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcCableCarrierFittingTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcFlowFittingType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCableCarrierFittingTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCableCarrierSegmentType",
      "group": 1,
      "details": {
        "definition": " IfcCableCarrierSegmentType\n SUBTYPE OF (IfcFlowSegmentType);\n\tPredefinedType : IfcCableCarrierSegmentTypeEnum;\n"
      }
    },
    {
      "id": "IfcFlowSegmentType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCableCarrierSegmentTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCableSegmentType",
      "group": 1,
      "details": {
        "definition": " IfcCableSegmentType\n SUBTYPE OF (IfcFlowSegmentType);\n\tPredefinedType : IfcCableSegmentTypeEnum;\n"
      }
    },
    {
      "id": "IfcCableSegmentTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDayInMonthNumber",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcMonthInYearNumber",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcYearNumber",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPoint",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCartesianTransformationOperator",
      "group": 1,
      "details": {
        "definition": " IfcCartesianTransformationOperator\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcCartesianTransformationOperator2D\n\t,IfcCartesianTransformationOperator3D))\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tAxis1 : OPTIONAL IfcDirection;\n\tAxis2 : OPTIONAL IfcDirection;\n\tLocalOrigin : IfcCartesianPoint;\n\tScale : OPTIONAL REAL;\n DERIVE\n\tScl : REAL := NVL(Scale, 1.0);\n\tDim : IfcDimensionCount := LocalOrigin.Dim;\n WHERE\n\tWR1 : Scl > 0.0;\n"
      }
    },
    {
      "id": "IfcCartesianTransformationOperator2D",
      "group": 1,
      "details": {
        "definition": " IfcCartesianTransformationOperator2D\n SUPERTYPE OF (ONEOF\n\t(IfcCartesianTransformationOperator2DnonUniform))\n SUBTYPE OF (IfcCartesianTransformationOperator);\n DERIVE\n\tU : LIST [2:2] OF IfcDirection := IfcBaseAxis(2,SELF\\IfcCartesianTransformationOperator.Axis1,\n          SELF\\IfcCartesianTransformationOperator.Axis2,?);\n WHERE\n\tWR1 : SELF\\IfcCartesianTransformationOperator.Dim = 2;\n\tWR2 : NOT(EXISTS(SELF\\IfcCartesianTransformationOperator.Axis1)) OR \n            (SELF\\IfcCartesianTransformationOperator.Axis1.Dim = 2);\n\tWR3 : NOT(EXISTS(SELF\\IfcCartesianTransformationOperator.Axis2)) OR \n            (SELF\\IfcCartesianTransformationOperator.Axis2.Dim = 2);\n"
      }
    },
    {
      "id": "IfcCartesianTransformationOperator2DnonUniform",
      "group": 1,
      "details": {
        "definition": " IfcCartesianTransformationOperator2DnonUniform\n SUBTYPE OF (IfcCartesianTransformationOperator2D);\n\tScale2 : OPTIONAL REAL;\n DERIVE\n\tScl2 : REAL := NVL(Scale2, SELF\\IfcCartesianTransformationOperator.Scl);\n WHERE\n\tWR1 : Scl2 > 0.0;\n"
      }
    },
    {
      "id": "IfcCartesianTransformationOperator3D",
      "group": 1,
      "details": {
        "definition": " IfcCartesianTransformationOperator3D\n SUPERTYPE OF (ONEOF\n\t(IfcCartesianTransformationOperator3DnonUniform))\n SUBTYPE OF (IfcCartesianTransformationOperator);\n\tAxis3 : OPTIONAL IfcDirection;\n DERIVE\n\tU : LIST [3:3] OF IfcDirection := IfcBaseAxis(3,SELF\\IfcCartesianTransformationOperator.Axis1,\n              SELF\\IfcCartesianTransformationOperator.Axis2,Axis3);\n WHERE\n\tWR1 : SELF\\IfcCartesianTransformationOperator.Dim = 3;\n\tWR2 : NOT(EXISTS(SELF\\IfcCartesianTransformationOperator.Axis1)) OR \n            (SELF\\IfcCartesianTransformationOperator.Axis1.Dim = 3);\n\tWR3 : NOT(EXISTS(SELF\\IfcCartesianTransformationOperator.Axis2)) OR \n            (SELF\\IfcCartesianTransformationOperator.Axis2.Dim = 3);\n\tWR4 : NOT(EXISTS(Axis3)) OR (Axis3.Dim = 3);\n"
      }
    },
    {
      "id": "IfcCartesianTransformationOperator3DnonUniform",
      "group": 1,
      "details": {
        "definition": " IfcCartesianTransformationOperator3DnonUniform\n SUBTYPE OF (IfcCartesianTransformationOperator3D);\n\tScale2 : OPTIONAL REAL;\n\tScale3 : OPTIONAL REAL;\n DERIVE\n\tScl2 : REAL := NVL(Scale2, SELF\\IfcCartesianTransformationOperator.Scl);\n\tScl3 : REAL := NVL(Scale3, SELF\\IfcCartesianTransformationOperator.Scl);\n WHERE\n\tWR1 : Scl2 > 0.0;\n\tWR2 : Scl3 > 0.0;\n"
      }
    },
    {
      "id": "IfcCenterLineProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcCenterLineProfileDef\n SUBTYPE OF (IfcArbitraryOpenProfileDef);\n\tThickness : IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcChamferEdgeFeature",
      "group": 1,
      "details": {
        "definition": " IfcChamferEdgeFeature\n SUBTYPE OF (IfcEdgeFeature);\n\tWidth : OPTIONAL IfcPositiveLengthMeasure;\n\tHeight : OPTIONAL IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcEdgeFeature",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcChillerType",
      "group": 1,
      "details": {
        "definition": " IfcChillerType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcChillerTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcChillerTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcChillerTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcChillerTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCircle",
      "group": 1,
      "details": {
        "definition": " IfcCircle\n SUBTYPE OF (IfcConic);\n\tRadius : IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcConic",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCircleHollowProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcCircleHollowProfileDef\n SUBTYPE OF (IfcCircleProfileDef);\n\tWallThickness : IfcPositiveLengthMeasure;\n WHERE\n\tWR1 : WallThickness < SELF\\IfcCircleProfileDef.Radius;\n"
      }
    },
    {
      "id": "IfcCircleProfileDef",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcClassification",
      "group": 1,
      "details": {
        "definition": " IfcClassification;\n\tSource : IfcLabel;\n\tEdition : IfcLabel;\n\tEditionDate : OPTIONAL IfcCalendarDate;\n\tName : IfcLabel;\n INVERSE\n\tContains : SET [0:?] OF IfcClassificationItem FOR ItemOf;\n"
      }
    },
    {
      "id": "IfcClassificationItem",
      "group": 1,
      "details": {
        "definition": " IfcClassificationItem;\n\tNotation : IfcClassificationNotationFacet;\n\tItemOf : OPTIONAL IfcClassification;\n\tTitle : IfcLabel;\n INVERSE\n\tIsClassifiedItemIn : SET [0:1] OF IfcClassificationItemRelationship FOR RelatedItems;\n\tIsClassifyingItemIn : SET [0:1] OF IfcClassificationItemRelationship FOR RelatingItem;\n"
      }
    },
    {
      "id": "IfcClassificationNotationFacet",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcClassificationItemRelationship",
      "group": 1,
      "details": {
        "definition": " IfcClassificationItemRelationship;\n\tRelatingItem : IfcClassificationItem;\n\tRelatedItems : SET [1:?] OF IfcClassificationItem;\n"
      }
    },
    {
      "id": "IfcClassificationNotation",
      "group": 1,
      "details": {
        "definition": " IfcClassificationNotation;\n\tNotationFacets : SET [1:?] OF IfcClassificationNotationFacet;\n"
      }
    },
    {
      "id": "IfcClassificationReference",
      "group": 1,
      "details": {
        "definition": " IfcClassificationReference\n SUBTYPE OF (IfcExternalReference);\n\tReferencedSource : OPTIONAL IfcClassification;\n"
      }
    },
    {
      "id": "IfcExternalReference",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcClosedShell",
      "group": 1,
      "details": {
        "definition": " IfcClosedShell\n SUBTYPE OF (IfcConnectedFaceSet);\n"
      }
    },
    {
      "id": "IfcConnectedFaceSet",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCoilType",
      "group": 1,
      "details": {
        "definition": " IfcCoilType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcCoilTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcCoilTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcCoilTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcCoilTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcColourRgb",
      "group": 1,
      "details": {
        "definition": " IfcColourRgb\n SUBTYPE OF (IfcColourSpecification);\n\tRed : IfcNormalisedRatioMeasure;\n\tGreen : IfcNormalisedRatioMeasure;\n\tBlue : IfcNormalisedRatioMeasure;\n"
      }
    },
    {
      "id": "IfcColourSpecification",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcNormalisedRatioMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcColumn",
      "group": 1,
      "details": {
        "definition": " IfcColumn\n SUBTYPE OF (IfcBuildingElement);\n"
      }
    },
    {
      "id": "IfcColumnType",
      "group": 1,
      "details": {
        "definition": " IfcColumnType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcColumnTypeEnum;\n"
      }
    },
    {
      "id": "IfcColumnTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcComplexProperty",
      "group": 1,
      "details": {
        "definition": " IfcComplexProperty\n SUBTYPE OF (IfcProperty);\n\tUsageName : IfcIdentifier;\n\tHasProperties : SET [1:?] OF IfcProperty;\n WHERE\n\tWR21 : SIZEOF(QUERY(temp <* HasProperties | SELF :=: temp)) = 0;\n\tWR22 : IfcUniquePropertyName(HasProperties);\n"
      }
    },
    {
      "id": "IfcProperty",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCompositeCurveSegment",
      "group": 1,
      "details": {
        "definition": " IfcCompositeCurveSegment\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tTransition : IfcTransitionCode;\n\tSameSense : BOOLEAN;\n\tParentCurve : IfcCurve;\n DERIVE\n\tDim : IfcDimensionCount := ParentCurve.Dim;\n INVERSE\n\tUsingCurves : SET [1:?] OF IfcCompositeCurve FOR Segments;\n WHERE\n\tWR1 : ('IFC2X3.IFCBOUNDEDCURVE' IN TYPEOF(ParentCurve));\n"
      }
    },
    {
      "id": "IfcTransitionCode",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCompositeProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcCompositeProfileDef\n SUBTYPE OF (IfcProfileDef);\n\tProfiles : SET [2:?] OF IfcProfileDef;\n\tLabel : OPTIONAL IfcLabel;\n WHERE\n\tWR1 : SIZEOF(QUERY(temp <* Profiles | temp.ProfileType <> Profiles[1].ProfileType)) = 0;\n\tWR2 : SIZEOF(QUERY(temp <* Profiles | 'IFC2X3.IFCCOMPOSITEPROFILEDEF' IN TYPEOF(temp))) = 0;\n"
      }
    },
    {
      "id": "IfcCompressorType",
      "group": 1,
      "details": {
        "definition": " IfcCompressorType\n SUBTYPE OF (IfcFlowMovingDeviceType);\n\tPredefinedType : IfcCompressorTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcCompressorTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcCompressorTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcFlowMovingDeviceType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCompressorTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCondenserType",
      "group": 1,
      "details": {
        "definition": " IfcCondenserType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcCondenserTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcCondenserTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcCondenserTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcCondenserTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCondition",
      "group": 1,
      "details": {
        "definition": " IfcCondition\n SUBTYPE OF (IfcGroup);\n"
      }
    },
    {
      "id": "IfcConditionCriterion",
      "group": 1,
      "details": {
        "definition": " IfcConditionCriterion\n SUBTYPE OF (IfcControl);\n\tCriterion : IfcConditionCriterionSelect;\n\tCriterionDateTime : IfcDateTimeSelect;\n WHERE\n\tWR1 : EXISTS(SELF\\IfcRoot.Name);\n"
      }
    },
    {
      "id": "IfcConditionCriterionSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAxis2Placement",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTopologicalRepresentationItem",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcConnectionCurveGeometry",
      "group": 1,
      "details": {
        "definition": " IfcConnectionCurveGeometry\n SUBTYPE OF (IfcConnectionGeometry);\n\tCurveOnRelatingElement : IfcCurveOrEdgeCurve;\n\tCurveOnRelatedElement : OPTIONAL IfcCurveOrEdgeCurve;\n"
      }
    },
    {
      "id": "IfcConnectionGeometry",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCurveOrEdgeCurve",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcConnectionPointEccentricity",
      "group": 1,
      "details": {
        "definition": " IfcConnectionPointEccentricity\n SUBTYPE OF (IfcConnectionPointGeometry);\n\tEccentricityInX : OPTIONAL IfcLengthMeasure;\n\tEccentricityInY : OPTIONAL IfcLengthMeasure;\n\tEccentricityInZ : OPTIONAL IfcLengthMeasure;\n"
      }
    },
    {
      "id": "IfcConnectionPointGeometry",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcPointOrVertexPoint",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcConnectionPortGeometry",
      "group": 1,
      "details": {
        "definition": " IfcConnectionPortGeometry\n SUBTYPE OF (IfcConnectionGeometry);\n\tLocationAtRelatingElement : IfcAxis2Placement;\n\tLocationAtRelatedElement : OPTIONAL IfcAxis2Placement;\n\tProfileOfPort : IfcProfileDef;\n"
      }
    },
    {
      "id": "IfcConnectionSurfaceGeometry",
      "group": 1,
      "details": {
        "definition": " IfcConnectionSurfaceGeometry\n SUBTYPE OF (IfcConnectionGeometry);\n\tSurfaceOnRelatingElement : IfcSurfaceOrFaceSurface;\n\tSurfaceOnRelatedElement : OPTIONAL IfcSurfaceOrFaceSurface;\n"
      }
    },
    {
      "id": "IfcSurfaceOrFaceSurface",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcConstraint",
      "group": 1,
      "details": {
        "definition": " IfcConstraint\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcMetric\n\t,IfcObjective));\n\tName : IfcLabel;\n\tDescription : OPTIONAL IfcText;\n\tConstraintGrade : IfcConstraintEnum;\n\tConstraintSource : OPTIONAL IfcLabel;\n\tCreatingActor : OPTIONAL IfcActorSelect;\n\tCreationTime : OPTIONAL IfcDateTimeSelect;\n\tUserDefinedGrade : OPTIONAL IfcLabel;\n INVERSE\n\tClassifiedAs : SET [0:?] OF IfcConstraintClassificationRelationship FOR ClassifiedConstraint;\n\tRelatesConstraints : SET [0:?] OF IfcConstraintRelationship FOR RelatingConstraint;\n\tIsRelatedWith : SET [0:?] OF IfcConstraintRelationship FOR RelatedConstraints;\n\tPropertiesForConstraint : SET [0:?] OF IfcPropertyConstraintRelationship FOR RelatingConstraint;\n\tAggregates : SET [0:?] OF IfcConstraintAggregationRelationship FOR RelatingConstraint;\n\tIsAggregatedIn : SET [0:?] OF IfcConstraintAggregationRelationship FOR RelatedConstraints;\n WHERE\n\tWR11 : (ConstraintGrade <> IfcConstraintEnum.USERDEFINED) OR\n             ((ConstraintGrade = IfcConstraintEnum.USERDEFINED) AND EXISTS(SELF\\IfcConstraint.UserDefinedGrade));\n"
      }
    },
    {
      "id": "IfcConstraintEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcConstraintAggregationRelationship",
      "group": 1,
      "details": {
        "definition": " IfcConstraintAggregationRelationship;\n\tName : OPTIONAL IfcLabel;\n\tDescription : OPTIONAL IfcText;\n\tRelatingConstraint : IfcConstraint;\n\tRelatedConstraints : LIST [1:?] OF UNIQUE IfcConstraint;\n\tLogicalAggregator : IfcLogicalOperatorEnum;\n WHERE\n\tWR11 : SIZEOF(QUERY(temp <* RelatedConstraints | \n               temp :=: RelatingConstraint\n               )) = 0;\n"
      }
    },
    {
      "id": "IfcLogicalOperatorEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcConstraintClassificationRelationship",
      "group": 1,
      "details": {
        "definition": " IfcConstraintClassificationRelationship;\n\tClassifiedConstraint : IfcConstraint;\n\tRelatedClassifications : SET [1:?] OF IfcClassificationNotationSelect;\n"
      }
    },
    {
      "id": "IfcConstraintRelationship",
      "group": 1,
      "details": {
        "definition": " IfcConstraintRelationship;\n\tName : OPTIONAL IfcLabel;\n\tDescription : OPTIONAL IfcText;\n\tRelatingConstraint : IfcConstraint;\n\tRelatedConstraints : SET [1:?] OF IfcConstraint;\n WHERE\n\tWR11 : SIZEOF(QUERY(temp <* RelatedConstraints | temp :=: RelatingConstraint )) = 0;\n"
      }
    },
    {
      "id": "IfcConstructionEquipmentResource",
      "group": 1,
      "details": {
        "definition": " IfcConstructionEquipmentResource\n SUBTYPE OF (IfcConstructionResource);\n"
      }
    },
    {
      "id": "IfcConstructionResource",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcConstructionMaterialResource",
      "group": 1,
      "details": {
        "definition": " IfcConstructionMaterialResource\n SUBTYPE OF (IfcConstructionResource);\n\tSuppliers : OPTIONAL SET [1:?] OF IfcActorSelect;\n\tUsageRatio : OPTIONAL IfcRatioMeasure;\n WHERE\n\tWR1 : SIZEOF(SELF\\IfcResource.ResourceOf) <=1;\n\tWR2 : NOT(EXISTS(SELF\\IfcResource.ResourceOf[1])) OR\n            (SELF\\IfcResource.ResourceOf[1].RelatedObjectsType = IfcObjectTypeEnum.PRODUCT);\n"
      }
    },
    {
      "id": "IfcConstructionProductResource",
      "group": 1,
      "details": {
        "definition": " IfcConstructionProductResource\n SUBTYPE OF (IfcConstructionResource);\n WHERE\n\tWR1 : SIZEOF(SELF\\IfcResource.ResourceOf) <=1;\n\tWR2 : NOT(EXISTS(SELF\\IfcResource.ResourceOf[1])) OR\n            (SELF\\IfcResource.ResourceOf[1].RelatedObjectsType = IfcObjectTypeEnum.PRODUCT);\n"
      }
    },
    {
      "id": "IfcResource",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcContextDependentUnit",
      "group": 1,
      "details": {
        "definition": " IfcContextDependentUnit\n SUBTYPE OF (IfcNamedUnit);\n\tName : IfcLabel;\n"
      }
    },
    {
      "id": "IfcNamedUnit",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcControllerType",
      "group": 1,
      "details": {
        "definition": " IfcControllerType\n SUBTYPE OF (IfcDistributionControlElementType);\n\tPredefinedType : IfcControllerTypeEnum;\n"
      }
    },
    {
      "id": "IfcControllerTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcConversionBasedUnit",
      "group": 1,
      "details": {
        "definition": " IfcConversionBasedUnit\n SUBTYPE OF (IfcNamedUnit);\n\tName : IfcLabel;\n\tConversionFactor : IfcMeasureWithUnit;\n"
      }
    },
    {
      "id": "IfcMeasureWithUnit",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCooledBeamType",
      "group": 1,
      "details": {
        "definition": " IfcCooledBeamType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcCooledBeamTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcCooledBeamTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcCooledBeamTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcCooledBeamTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCoolingTowerType",
      "group": 1,
      "details": {
        "definition": " IfcCoolingTowerType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcCoolingTowerTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcCoolingTowerTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcCoolingTowerTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcCoolingTowerTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCoordinatedUniversalTimeOffset",
      "group": 1,
      "details": {
        "definition": " IfcCoordinatedUniversalTimeOffset;\n\tHourOffset : IfcHourInDay;\n\tMinuteOffset : OPTIONAL IfcMinuteInHour;\n\tSense : IfcAheadOrBehind;\n"
      }
    },
    {
      "id": "IfcHourInDay",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcAheadOrBehind",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCostItem",
      "group": 1,
      "details": {
        "definition": " IfcCostItem\n SUBTYPE OF (IfcControl);\n"
      }
    },
    {
      "id": "IfcCostSchedule",
      "group": 1,
      "details": {
        "definition": " IfcCostSchedule\n SUBTYPE OF (IfcControl);\n\tSubmittedBy : OPTIONAL IfcActorSelect;\n\tPreparedBy : OPTIONAL IfcActorSelect;\n\tSubmittedOn : OPTIONAL IfcDateTimeSelect;\n\tStatus : OPTIONAL IfcLabel;\n\tTargetUsers : OPTIONAL SET [1:?] OF IfcActorSelect;\n\tUpdateDate : OPTIONAL IfcDateTimeSelect;\n\tID : IfcIdentifier;\n\tPredefinedType : IfcCostScheduleTypeEnum;\n UNIQUE\n\tUR2 : ID;\n"
      }
    },
    {
      "id": "IfcCostScheduleTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCovering",
      "group": 1,
      "details": {
        "definition": " IfcCovering\n SUBTYPE OF (IfcBuildingElement);\n\tPredefinedType : OPTIONAL IfcCoveringTypeEnum;\n INVERSE\n\tCoversSpaces : SET [0:1] OF IfcRelCoversSpaces FOR RelatedCoverings;\n\tCovers : SET [0:1] OF IfcRelCoversBldgElements FOR RelatedCoverings;\n"
      }
    },
    {
      "id": "IfcCoveringType",
      "group": 1,
      "details": {
        "definition": " IfcCoveringType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcCoveringTypeEnum;\n"
      }
    },
    {
      "id": "IfcCoveringTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCraneRailAShapeProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcCraneRailAShapeProfileDef\n SUBTYPE OF (IfcParameterizedProfileDef);\n\tOverallHeight : IfcPositiveLengthMeasure;\n\tBaseWidth2 : IfcPositiveLengthMeasure;\n\tRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tHeadWidth : IfcPositiveLengthMeasure;\n\tHeadDepth2 : IfcPositiveLengthMeasure;\n\tHeadDepth3 : IfcPositiveLengthMeasure;\n\tWebThickness : IfcPositiveLengthMeasure;\n\tBaseWidth4 : IfcPositiveLengthMeasure;\n\tBaseDepth1 : IfcPositiveLengthMeasure;\n\tBaseDepth2 : IfcPositiveLengthMeasure;\n\tBaseDepth3 : IfcPositiveLengthMeasure;\n\tCentreOfGravityInY : OPTIONAL IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcCraneRailFShapeProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcCraneRailFShapeProfileDef\n SUBTYPE OF (IfcParameterizedProfileDef);\n\tOverallHeight : IfcPositiveLengthMeasure;\n\tHeadWidth : IfcPositiveLengthMeasure;\n\tRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tHeadDepth2 : IfcPositiveLengthMeasure;\n\tHeadDepth3 : IfcPositiveLengthMeasure;\n\tWebThickness : IfcPositiveLengthMeasure;\n\tBaseDepth1 : IfcPositiveLengthMeasure;\n\tBaseDepth2 : IfcPositiveLengthMeasure;\n\tCentreOfGravityInY : OPTIONAL IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcCrewResource",
      "group": 1,
      "details": {
        "definition": " IfcCrewResource\n SUBTYPE OF (IfcConstructionResource);\n"
      }
    },
    {
      "id": "IfcCsgSolid",
      "group": 1,
      "details": {
        "definition": " IfcCsgSolid\n SUBTYPE OF (IfcSolidModel);\n\tTreeRootExpression : IfcCsgSelect;\n"
      }
    },
    {
      "id": "IfcSolidModel",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCsgSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCurrencyRelationship",
      "group": 1,
      "details": {
        "definition": " IfcCurrencyRelationship;\n\tRelatingMonetaryUnit : IfcMonetaryUnit;\n\tRelatedMonetaryUnit : IfcMonetaryUnit;\n\tExchangeRate : IfcPositiveRatioMeasure;\n\tRateDateTime : IfcDateAndTime;\n\tRateSource : OPTIONAL IfcLibraryInformation;\n"
      }
    },
    {
      "id": "IfcMonetaryUnit",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPositiveRatioMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDateAndTime",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCurtainWall",
      "group": 1,
      "details": {
        "definition": " IfcCurtainWall\n SUBTYPE OF (IfcBuildingElement);\n"
      }
    },
    {
      "id": "IfcCurtainWallType",
      "group": 1,
      "details": {
        "definition": " IfcCurtainWallType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcCurtainWallTypeEnum;\n"
      }
    },
    {
      "id": "IfcCurtainWallTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCurveBoundedPlane",
      "group": 1,
      "details": {
        "definition": " IfcCurveBoundedPlane\n SUBTYPE OF (IfcBoundedSurface);\n\tBasisSurface : IfcPlane;\n\tOuterBoundary : IfcCurve;\n\tInnerBoundaries : SET [0:?] OF IfcCurve;\n DERIVE\n\tDim : IfcDimensionCount := BasisSurface.Dim;\n"
      }
    },
    {
      "id": "IfcPlane",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCurveStyle",
      "group": 1,
      "details": {
        "definition": " IfcCurveStyle\n SUBTYPE OF (IfcPresentationStyle);\n\tCurveFont : OPTIONAL IfcCurveFontOrScaledCurveFontSelect;\n\tCurveWidth : OPTIONAL IfcSizeSelect;\n\tCurveColour : OPTIONAL IfcColour;\n WHERE\n\tWR11 : (NOT(EXISTS(CurveWidth))) OR\n             ('IFC2X3.IFCPOSITIVELENGTHMEASURE' IN TYPEOF(CurveWidth)) OR \n              (('IFC2X3.IFCDESCRIPTIVEMEASURE' IN TYPEOF(CurveWidth)) AND\n              (CurveWidth = 'by layer'));\n"
      }
    },
    {
      "id": "IfcPresentationStyle",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcCurveStyleFont",
      "group": 1,
      "details": {
        "definition": " IfcCurveStyleFont;\n\tName : OPTIONAL IfcLabel;\n\tPatternList : LIST [1:?] OF IfcCurveStyleFontPattern;\n"
      }
    },
    {
      "id": "IfcCurveStyleFontAndScaling",
      "group": 1,
      "details": {
        "definition": " IfcCurveStyleFontAndScaling;\n\tName : OPTIONAL IfcLabel;\n\tCurveFont : IfcCurveStyleFontSelect;\n\tCurveFontScaling : IfcPositiveRatioMeasure;\n"
      }
    },
    {
      "id": "IfcCurveStyleFontSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCurveStyleFontPattern",
      "group": 1,
      "details": {
        "definition": " IfcCurveStyleFontPattern;\n\tVisibleSegmentLength : IfcLengthMeasure;\n\tInvisibleSegmentLength : IfcPositiveLengthMeasure;\n WHERE\n\tWR01 : VisibleSegmentLength >= 0.;\n"
      }
    },
    {
      "id": "IfcLengthMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDamperType",
      "group": 1,
      "details": {
        "definition": " IfcDamperType\n SUBTYPE OF (IfcFlowControllerType);\n\tPredefinedType : IfcDamperTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcDamperTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcDamperTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcDamperTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLocalTime",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDefinedSymbol",
      "group": 1,
      "details": {
        "definition": " IfcDefinedSymbol\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tDefinition : IfcDefinedSymbolSelect;\n\tTarget : IfcCartesianTransformationOperator2D;\n"
      }
    },
    {
      "id": "IfcDefinedSymbolSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDerivedProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcDerivedProfileDef\n SUBTYPE OF (IfcProfileDef);\n\tParentProfile : IfcProfileDef;\n\tOperator : IfcCartesianTransformationOperator2D;\n\tLabel : OPTIONAL IfcLabel;\n WHERE\n\tWR1 : SELF\\IfcProfileDef.ProfileType = ParentProfile.ProfileType;\n"
      }
    },
    {
      "id": "IfcDerivedUnit",
      "group": 1,
      "details": {
        "definition": " IfcDerivedUnit;\n\tElements : SET [1:?] OF IfcDerivedUnitElement;\n\tUnitType : IfcDerivedUnitEnum;\n\tUserDefinedType : OPTIONAL IfcLabel;\n DERIVE\n\tDimensions : IfcDimensionalExponents := IfcDeriveDimensionalExponents(SELF);\n WHERE\n\tWR1 : (SIZEOF (Elements) > 1) OR ((SIZEOF (Elements) = 1) AND (Elements[1].Exponent <> 1 ));\n\tWR2 : (UnitType <> IfcDerivedUnitEnum.USERDEFINED) OR\n            ((UnitType = IfcDerivedUnitEnum.USERDEFINED) AND \n             (EXISTS(SELF.UserDefinedType)));\n"
      }
    },
    {
      "id": "IfcDerivedUnitEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDerivedUnitElement",
      "group": 1,
      "details": {
        "definition": " IfcDerivedUnitElement;\n\tUnit : IfcNamedUnit;\n\tExponent : INTEGER;\n"
      }
    },
    {
      "id": "IfcDiameterDimension",
      "group": 1,
      "details": {
        "definition": " IfcDiameterDimension\n SUBTYPE OF (IfcDimensionCurveDirectedCallout);\n"
      }
    },
    {
      "id": "IfcDimensionCalloutRelationship",
      "group": 1,
      "details": {
        "definition": " IfcDimensionCalloutRelationship\n SUBTYPE OF (IfcDraughtingCalloutRelationship);\n WHERE\n\tWR11 : SELF\\IfcDraughtingCalloutRelationship.Name IN ['primary','secondary'];\n\tWR12 : SIZEOF(TYPEOF(SELF\\IfcDraughtingCalloutRelationship.RelatingDraughtingCallout) * [\n                  'IFC2X3.IFCANGULARDIMENSION',\n                  'IFC2X3.IFCDIAMETERDIMENSION',\n                  'IFC2X3.IFCLINEARDIMENSION',\n                  'IFC2X3.IFCRADIUSDIMENSION']) = 1;\n\tWR13 : NOT ('IFC2X3.IFCDIMENSIONCURVEDIRECTEDCALLOUT'\n               IN TYPEOF (SELF\\IfcDraughtingCalloutRelationship.RelatedDraughtingCallout));\n"
      }
    },
    {
      "id": "IfcDraughtingCalloutRelationship",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDimensionCurve",
      "group": 1,
      "details": {
        "definition": " IfcDimensionCurve\n SUBTYPE OF (IfcAnnotationCurveOccurrence);\n INVERSE\n\tAnnotatedBySymbols : SET [0:2] OF IfcTerminatorSymbol FOR AnnotatedCurve;\n WHERE\n\tWR51 : SIZEOF(USEDIN(SELF,'IFC2X3.IFCDRAUGHTINGCALLOUT.CONTENTS')) \n                   >= 1;\n\tWR52 : (SIZEOF(QUERY (Dct1 <* USEDIN(SELF,'IFC2X3.' + \n                            'IFCTERMINATORSYMBOL.ANNOTATEDCURVE') | (Dct1.Role = IfcDimensionExtentUsage.ORIGIN))) <= 1) \n             AND \n             (SIZEOF(QUERY (Dct2 <* USEDIN(SELF,'IFC2X3.' + \n                            'IFCTERMINATORSYMBOL.ANNOTATEDCURVE') | (Dct2.Role = IfcDimensionExtentUsage.TARGET))) <= 1);\n\tWR53 : SIZEOF(QUERY (Dct <* AnnotatedBySymbols | \n               NOT('IFC2X3.IFCDIMENSIONCURVETERMINATOR' IN TYPEOF(Dct)))) \n               = 0;\n"
      }
    },
    {
      "id": "IfcDraughtingCallout",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDimensionCurveTerminator",
      "group": 1,
      "details": {
        "definition": " IfcDimensionCurveTerminator\n SUBTYPE OF (IfcTerminatorSymbol);\n\tRole : IfcDimensionExtentUsage;\n WHERE\n\tWR61 : 'IFC2X3.IFCDIMENSIONCURVE' IN TYPEOF\n             (SELF\\IfcTerminatorSymbol.AnnotatedCurve);\n"
      }
    },
    {
      "id": "IfcTerminatorSymbol",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDimensionExtentUsage",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDimensionPair",
      "group": 1,
      "details": {
        "definition": " IfcDimensionPair\n SUBTYPE OF (IfcDraughtingCalloutRelationship);\n WHERE\n\tWR11 : SELF.Name IN ['chained','parallel'];\n\tWR12 : SIZEOF(TYPEOF(SELF.RelatingDraughtingCallout) * [\n                            'IFC2X3.IFCANGULARDIMENSION',\n                            'IFC2X3.IFCDIAMETERDIMENSION',\n                            'IFC2X3.IFCLINEARDIMENSION',\n                            'IFC2X3.IFCRADIUSDIMENSION']) = 1;\n\tWR13 : SIZEOF(TYPEOF(SELF.RelatedDraughtingCallout) * [\n                            'IFC2X3.IFCANGULARDIMENSION',\n                            'IFC2X3.IFCDIAMETERDIMENSION',\n                            'IFC2X3.IFCLINEARDIMENSION',\n                            'IFC2X3.IFCRADIUSDIMENSION']) = 1;\n"
      }
    },
    {
      "id": "IfcDimensionalExponents",
      "group": 1,
      "details": {
        "definition": " IfcDimensionalExponents;\n\tLengthExponent : INTEGER;\n\tMassExponent : INTEGER;\n\tTimeExponent : INTEGER;\n\tElectricCurrentExponent : INTEGER;\n\tThermodynamicTemperatureExponent : INTEGER;\n\tAmountOfSubstanceExponent : INTEGER;\n\tLuminousIntensityExponent : INTEGER;\n"
      }
    },
    {
      "id": "IfcDirection",
      "group": 1,
      "details": {
        "definition": " IfcDirection\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tDirectionRatios : LIST [2:3] OF REAL;\n DERIVE\n\tDim : IfcDimensionCount := HIINDEX(DirectionRatios);\n"
      }
    },
    {
      "id": "IfcDiscreteAccessory",
      "group": 1,
      "details": {
        "definition": " IfcDiscreteAccessory\n SUBTYPE OF (IfcElementComponent);\n"
      }
    },
    {
      "id": "IfcElementComponent",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDiscreteAccessoryType",
      "group": 1,
      "details": {
        "definition": " IfcDiscreteAccessoryType\n SUPERTYPE OF (ONEOF\n\t(IfcVibrationIsolatorType))\n SUBTYPE OF (IfcElementComponentType);\n"
      }
    },
    {
      "id": "IfcElementComponentType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDistributionChamberElement",
      "group": 1,
      "details": {
        "definition": " IfcDistributionChamberElement\n SUBTYPE OF (IfcDistributionFlowElement);\n"
      }
    },
    {
      "id": "IfcDistributionFlowElement",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDistributionChamberElementType",
      "group": 1,
      "details": {
        "definition": " IfcDistributionChamberElementType\n SUBTYPE OF (IfcDistributionFlowElementType);\n\tPredefinedType : IfcDistributionChamberElementTypeEnum;\n"
      }
    },
    {
      "id": "IfcDistributionFlowElementType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDistributionChamberElementTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDistributionControlElement",
      "group": 1,
      "details": {
        "definition": " IfcDistributionControlElement\n SUBTYPE OF (IfcDistributionElement);\n\tControlElementId : OPTIONAL IfcIdentifier;\n INVERSE\n\tAssignedToFlowElement : SET [0:1] OF IfcRelFlowControlElements FOR RelatedControlElements;\n"
      }
    },
    {
      "id": "IfcDistributionElement",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDistributionElementType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDistributionPort",
      "group": 1,
      "details": {
        "definition": " IfcDistributionPort\n SUBTYPE OF (IfcPort);\n\tFlowDirection : OPTIONAL IfcFlowDirectionEnum;\n"
      }
    },
    {
      "id": "IfcPort",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDocumentElectronicFormat",
      "group": 1,
      "details": {
        "definition": " IfcDocumentElectronicFormat;\n\tFileExtension : OPTIONAL IfcLabel;\n\tMimeContentType : OPTIONAL IfcLabel;\n\tMimeSubtype : OPTIONAL IfcLabel;\n WHERE\n\tWR1 : EXISTS(FileExtension) OR EXISTS(MimeContentType);\n"
      }
    },
    {
      "id": "IfcDocumentInformation",
      "group": 1,
      "details": {
        "definition": " IfcDocumentInformation;\n\tDocumentId : IfcIdentifier;\n\tName : IfcLabel;\n\tDescription : OPTIONAL IfcText;\n\tDocumentReferences : OPTIONAL SET [1:?] OF IfcDocumentReference;\n\tPurpose : OPTIONAL IfcText;\n\tIntendedUse : OPTIONAL IfcText;\n\tScope : OPTIONAL IfcText;\n\tRevision : OPTIONAL IfcLabel;\n\tDocumentOwner : OPTIONAL IfcActorSelect;\n\tEditors : OPTIONAL SET [1:?] OF IfcActorSelect;\n\tCreationTime : OPTIONAL IfcDateAndTime;\n\tLastRevisionTime : OPTIONAL IfcDateAndTime;\n\tElectronicFormat : OPTIONAL IfcDocumentElectronicFormat;\n\tValidFrom : OPTIONAL IfcCalendarDate;\n\tValidUntil : OPTIONAL IfcCalendarDate;\n\tConfidentiality : OPTIONAL IfcDocumentConfidentialityEnum;\n\tStatus : OPTIONAL IfcDocumentStatusEnum;\n INVERSE\n\tIsPointedTo : SET [0:?] OF IfcDocumentInformationRelationship FOR RelatedDocuments;\n\tIsPointer : SET [0:1] OF IfcDocumentInformationRelationship FOR RelatingDocument;\n"
      }
    },
    {
      "id": "IfcDocumentInformationRelationship",
      "group": 1,
      "details": {
        "definition": " IfcDocumentInformationRelationship;\n\tRelatingDocument : IfcDocumentInformation;\n\tRelatedDocuments : SET [1:?] OF IfcDocumentInformation;\n\tRelationshipType : OPTIONAL IfcLabel;\n"
      }
    },
    {
      "id": "IfcDocumentReference",
      "group": 1,
      "details": {
        "definition": " IfcDocumentReference\n SUBTYPE OF (IfcExternalReference);\n INVERSE\n\tReferenceToDocument : SET [0:1] OF IfcDocumentInformation FOR DocumentReferences;\n WHERE\n\tWR1 : EXISTS(Name) XOR EXISTS(ReferenceToDocument[1]);\n"
      }
    },
    {
      "id": "IfcDoor",
      "group": 1,
      "details": {
        "definition": " IfcDoor\n SUBTYPE OF (IfcBuildingElement);\n\tOverallHeight : OPTIONAL IfcPositiveLengthMeasure;\n\tOverallWidth : OPTIONAL IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcDoorLiningProperties",
      "group": 1,
      "details": {
        "definition": " IfcDoorLiningProperties\n SUBTYPE OF (IfcPropertySetDefinition);\n\tLiningDepth : OPTIONAL IfcPositiveLengthMeasure;\n\tLiningThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tThresholdDepth : OPTIONAL IfcPositiveLengthMeasure;\n\tThresholdThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tTransomThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tTransomOffset : OPTIONAL IfcLengthMeasure;\n\tLiningOffset : OPTIONAL IfcLengthMeasure;\n\tThresholdOffset : OPTIONAL IfcLengthMeasure;\n\tCasingThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tCasingDepth : OPTIONAL IfcPositiveLengthMeasure;\n\tShapeAspectStyle : OPTIONAL IfcShapeAspect;\n WHERE\n\tWR31 : NOT(NOT(EXISTS(LiningDepth)) AND EXISTS(LiningThickness));\n\tWR32 : NOT(NOT(EXISTS(ThresholdDepth)) AND EXISTS(ThresholdThickness));\n\tWR33 : (EXISTS(TransomOffset) AND EXISTS(TransomThickness)) XOR\n             (NOT(EXISTS(TransomOffset)) AND NOT(EXISTS(TransomThickness)));\n\tWR34 : (EXISTS(CasingDepth) AND EXISTS(CasingThickness)) XOR\n             (NOT(EXISTS(CasingDepth)) AND NOT(EXISTS(CasingThickness)));\n\tWR35 : EXISTS(SELF\\IfcPropertySetDefinition.DefinesType[1]) AND \n             ('IFC2X3.IFCDOORSTYLE' IN TYPEOF(SELF\\IfcPropertySetDefinition.DefinesType[1]));\n"
      }
    },
    {
      "id": "IfcPropertySetDefinition",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDoorPanelProperties",
      "group": 1,
      "details": {
        "definition": " IfcDoorPanelProperties\n SUBTYPE OF (IfcPropertySetDefinition);\n\tPanelDepth : OPTIONAL IfcPositiveLengthMeasure;\n\tPanelOperation : IfcDoorPanelOperationEnum;\n\tPanelWidth : OPTIONAL IfcNormalisedRatioMeasure;\n\tPanelPosition : IfcDoorPanelPositionEnum;\n\tShapeAspectStyle : OPTIONAL IfcShapeAspect;\n WHERE\n\tWR31 : EXISTS(SELF\\IfcPropertySetDefinition.DefinesType[1]) AND \n             ('IFC2X3.IFCDOORSTYLE' IN TYPEOF(SELF\\IfcPropertySetDefinition.DefinesType[1]));\n"
      }
    },
    {
      "id": "IfcDoorPanelOperationEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDoorPanelPositionEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDoorStyle",
      "group": 1,
      "details": {
        "definition": " IfcDoorStyle\n SUBTYPE OF (IfcTypeProduct);\n\tOperationType : IfcDoorStyleOperationEnum;\n\tConstructionType : IfcDoorStyleConstructionEnum;\n\tParameterTakesPrecedence : BOOLEAN;\n\tSizeable : BOOLEAN;\n"
      }
    },
    {
      "id": "IfcTypeProduct",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDoorStyleOperationEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDoorStyleConstructionEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDraughtingPreDefinedColour",
      "group": 1,
      "details": {
        "definition": " IfcDraughtingPreDefinedColour\n SUBTYPE OF (IfcPreDefinedColour);\n WHERE\n\tWR31 : SELF\\IfcPreDefinedItem.Name IN ['black','red','green','blue','yellow',\n                  'magenta','cyan','white','by layer'];\n"
      }
    },
    {
      "id": "IfcPreDefinedColour",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDraughtingPreDefinedCurveFont",
      "group": 1,
      "details": {
        "definition": " IfcDraughtingPreDefinedCurveFont\n SUBTYPE OF (IfcPreDefinedCurveFont);\n WHERE\n\tWR31 : SELF\\IfcPredefinedItem.Name IN\n                    ['continuous',\n                     'chain',\n                     'chain double dash',\n                     'dashed',\n                     'dotted',\n                     'by layer'];\n"
      }
    },
    {
      "id": "IfcPreDefinedCurveFont",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDraughtingPreDefinedTextFont",
      "group": 1,
      "details": {
        "definition": " IfcDraughtingPreDefinedTextFont\n SUBTYPE OF (IfcPreDefinedTextFont);\n WHERE\n\tWR31 : SELF\\IfcPreDefinedItem.Name IN ['ISO 3098-1 font A','ISO 3098-1 font B'];\n"
      }
    },
    {
      "id": "IfcPreDefinedTextFont",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDuctFittingType",
      "group": 1,
      "details": {
        "definition": " IfcDuctFittingType\n SUBTYPE OF (IfcFlowFittingType);\n\tPredefinedType : IfcDuctFittingTypeEnum;\n WHERE\n\tWR2 : (PredefinedType <> IfcDuctFittingTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcDuctFittingTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcDuctFittingTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDuctSegmentType",
      "group": 1,
      "details": {
        "definition": " IfcDuctSegmentType\n SUBTYPE OF (IfcFlowSegmentType);\n\tPredefinedType : IfcDuctSegmentTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcDuctSegmentTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcDuctSegmentTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcDuctSegmentTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDuctSilencerType",
      "group": 1,
      "details": {
        "definition": " IfcDuctSilencerType\n SUBTYPE OF (IfcFlowTreatmentDeviceType);\n\tPredefinedType : IfcDuctSilencerTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcDuctSilencerTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcDuctSilencerTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcFlowTreatmentDeviceType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDuctSilencerTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcEdge",
      "group": 1,
      "details": {
        "definition": " IfcEdge\n SUPERTYPE OF (ONEOF\n\t(IfcEdgeCurve\n\t,IfcOrientedEdge\n\t,IfcSubedge))\n SUBTYPE OF (IfcTopologicalRepresentationItem);\n\tEdgeStart : IfcVertex;\n\tEdgeEnd : IfcVertex;\n"
      }
    },
    {
      "id": "IfcVertex",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcEdgeCurve",
      "group": 1,
      "details": {
        "definition": " IfcEdgeCurve\n SUBTYPE OF (IfcEdge);\n\tEdgeGeometry : IfcCurve;\n\tSameSense : BOOLEAN;\n"
      }
    },
    {
      "id": "IfcFeatureElementSubtraction",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcEdgeLoop",
      "group": 1,
      "details": {
        "definition": " IfcEdgeLoop\n SUBTYPE OF (IfcLoop);\n\tEdgeList : LIST [1:?] OF IfcOrientedEdge;\n DERIVE\n\tNe : INTEGER := SIZEOF(EdgeList);\n WHERE\n\tWR1 : (EdgeList[1].EdgeStart) :=: (EdgeList[Ne].EdgeEnd);\n\tWR2 : IfcLoopHeadToTail(SELF);\n"
      }
    },
    {
      "id": "IfcLoop",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcElectricApplianceType",
      "group": 1,
      "details": {
        "definition": " IfcElectricApplianceType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcElectricApplianceTypeEnum;\n"
      }
    },
    {
      "id": "IfcElectricApplianceTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElectricDistributionPoint",
      "group": 1,
      "details": {
        "definition": " IfcElectricDistributionPoint\n SUBTYPE OF (IfcFlowController);\n\tDistributionPointFunction : IfcElectricDistributionPointFunctionEnum;\n\tUserDefinedFunction : OPTIONAL IfcLabel;\n WHERE\n\tWR31 : (DistributionPointFunction <> IfcElectricDistributionPointFunctionEnum.USERDEFINED) OR\n             ((DistributionPointFunction = IfcElectricDistributionPointFunctionEnum.USERDEFINED) AND EXISTS(SELF\\IfcElectricDistributionPoint.UserDefinedFunction));\n"
      }
    },
    {
      "id": "IfcFlowController",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcElectricDistributionPointFunctionEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElectricFlowStorageDeviceType",
      "group": 1,
      "details": {
        "definition": " IfcElectricFlowStorageDeviceType\n SUBTYPE OF (IfcFlowStorageDeviceType);\n\tPredefinedType : IfcElectricFlowStorageDeviceTypeEnum;\n"
      }
    },
    {
      "id": "IfcFlowStorageDeviceType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcElectricFlowStorageDeviceTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElectricGeneratorType",
      "group": 1,
      "details": {
        "definition": " IfcElectricGeneratorType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcElectricGeneratorTypeEnum;\n"
      }
    },
    {
      "id": "IfcElectricGeneratorTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElectricHeaterType",
      "group": 1,
      "details": {
        "definition": " IfcElectricHeaterType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcElectricHeaterTypeEnum;\n"
      }
    },
    {
      "id": "IfcElectricHeaterTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElectricMotorType",
      "group": 1,
      "details": {
        "definition": " IfcElectricMotorType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcElectricMotorTypeEnum;\n"
      }
    },
    {
      "id": "IfcElectricMotorTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElectricTimeControlType",
      "group": 1,
      "details": {
        "definition": " IfcElectricTimeControlType\n SUBTYPE OF (IfcFlowControllerType);\n\tPredefinedType : IfcElectricTimeControlTypeEnum;\n"
      }
    },
    {
      "id": "IfcElectricTimeControlTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElectricalBaseProperties",
      "group": 1,
      "details": {
        "definition": " IfcElectricalBaseProperties\n SUBTYPE OF (IfcEnergyProperties);\n\tElectricCurrentType : OPTIONAL IfcElectricCurrentEnum;\n\tInputVoltage : IfcElectricVoltageMeasure;\n\tInputFrequency : IfcFrequencyMeasure;\n\tFullLoadCurrent : OPTIONAL IfcElectricCurrentMeasure;\n\tMinimumCircuitCurrent : OPTIONAL IfcElectricCurrentMeasure;\n\tMaximumPowerInput : OPTIONAL IfcPowerMeasure;\n\tRatedPowerInput : OPTIONAL IfcPowerMeasure;\n\tInputPhase : INTEGER;\n"
      }
    },
    {
      "id": "IfcEnergyProperties",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcElectricVoltageMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcFrequencyMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElectricalCircuit",
      "group": 1,
      "details": {
        "definition": " IfcElectricalCircuit\n SUBTYPE OF (IfcSystem);\n"
      }
    },
    {
      "id": "IfcSystem",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcElectricalElement",
      "group": 1,
      "details": {
        "definition": " IfcElectricalElement\n SUBTYPE OF (IfcElement);\n"
      }
    },
    {
      "id": "IfcElementAssembly",
      "group": 1,
      "details": {
        "definition": " IfcElementAssembly\n SUBTYPE OF (IfcElement);\n\tAssemblyPlace : OPTIONAL IfcAssemblyPlaceEnum;\n\tPredefinedType : IfcElementAssemblyTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcElementAssemblyTypeEnum.USERDEFINED) OR ((PredefinedType = IfcElementAssemblyTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcObject.ObjectType));\n"
      }
    },
    {
      "id": "IfcElementAssemblyTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElementQuantity",
      "group": 1,
      "details": {
        "definition": " IfcElementQuantity\n SUBTYPE OF (IfcPropertySetDefinition);\n\tMethodOfMeasurement : OPTIONAL IfcLabel;\n\tQuantities : SET [1:?] OF IfcPhysicalQuantity;\n"
      }
    },
    {
      "id": "IfcElementarySurface",
      "group": 1,
      "details": {
        "definition": " IfcElementarySurface\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcPlane))\n SUBTYPE OF (IfcSurface);\n\tPosition : IfcAxis2Placement3D;\n DERIVE\n\tDim : IfcDimensionCount := Position.Dim;\n"
      }
    },
    {
      "id": "IfcEllipse",
      "group": 1,
      "details": {
        "definition": " IfcEllipse\n SUBTYPE OF (IfcConic);\n\tSemiAxis1 : IfcPositiveLengthMeasure;\n\tSemiAxis2 : IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcEllipseProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcEllipseProfileDef\n SUBTYPE OF (IfcParameterizedProfileDef);\n\tSemiAxis1 : IfcPositiveLengthMeasure;\n\tSemiAxis2 : IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcEnergyConversionDevice",
      "group": 1,
      "details": {
        "definition": " IfcEnergyConversionDevice\n SUBTYPE OF (IfcDistributionFlowElement);\n"
      }
    },
    {
      "id": "IfcEnvironmentalImpactValue",
      "group": 1,
      "details": {
        "definition": " IfcEnvironmentalImpactValue\n SUBTYPE OF (IfcAppliedValue);\n\tImpactType : IfcLabel;\n\tCategory : IfcEnvironmentalImpactCategoryEnum;\n\tUserDefinedCategory : OPTIONAL IfcLabel;\n WHERE\n\tWR1 : (Category <> IfcEnvironmentalImpactCategoryEnum.USERDEFINED) OR\n            ((Category = IfcEnvironmentalImpactCategoryEnum.USERDEFINED) AND EXISTS(SELF\\IfcEnvironmentalImpactValue.UserDefinedCategory));\n"
      }
    },
    {
      "id": "IfcEnvironmentalImpactCategoryEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcEquipmentElement",
      "group": 1,
      "details": {
        "definition": " IfcEquipmentElement\n SUBTYPE OF (IfcElement);\n"
      }
    },
    {
      "id": "IfcEquipmentStandard",
      "group": 1,
      "details": {
        "definition": " IfcEquipmentStandard\n SUBTYPE OF (IfcControl);\n"
      }
    },
    {
      "id": "IfcEvaporativeCoolerType",
      "group": 1,
      "details": {
        "definition": " IfcEvaporativeCoolerType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcEvaporativeCoolerTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcEvaporativeCoolerTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcEvaporativeCoolerTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcEvaporativeCoolerTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcEvaporatorType",
      "group": 1,
      "details": {
        "definition": " IfcEvaporatorType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcEvaporatorTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcEvaporatorTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcEvaporatorTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcEvaporatorTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcExtendedMaterialProperties",
      "group": 1,
      "details": {
        "definition": " IfcExtendedMaterialProperties\n SUBTYPE OF (IfcMaterialProperties);\n\tExtendedProperties : SET [1:?] OF IfcProperty;\n\tDescription : OPTIONAL IfcText;\n\tName : IfcLabel;\n"
      }
    },
    {
      "id": "IfcMaterialProperties",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcExternallyDefinedHatchStyle",
      "group": 1,
      "details": {
        "definition": " IfcExternallyDefinedHatchStyle\n SUBTYPE OF (IfcExternalReference);\n"
      }
    },
    {
      "id": "IfcExternallyDefinedSurfaceStyle",
      "group": 1,
      "details": {
        "definition": " IfcExternallyDefinedSurfaceStyle\n SUBTYPE OF (IfcExternalReference);\n"
      }
    },
    {
      "id": "IfcExternallyDefinedSymbol",
      "group": 1,
      "details": {
        "definition": " IfcExternallyDefinedSymbol\n SUBTYPE OF (IfcExternalReference);\n"
      }
    },
    {
      "id": "IfcExternallyDefinedTextFont",
      "group": 1,
      "details": {
        "definition": " IfcExternallyDefinedTextFont\n SUBTYPE OF (IfcExternalReference);\n"
      }
    },
    {
      "id": "IfcExtrudedAreaSolid",
      "group": 1,
      "details": {
        "definition": " IfcExtrudedAreaSolid\n SUBTYPE OF (IfcSweptAreaSolid);\n\tExtrudedDirection : IfcDirection;\n\tDepth : IfcPositiveLengthMeasure;\n WHERE\n\tWR31 : IfcDotProduct(IfcRepresentationItem() || IfcGeometricRepresentationItem() || IfcDirection([0.0,0.0,1.0]), SELF.ExtrudedDirection) <> 0.0;\n"
      }
    },
    {
      "id": "IfcSweptAreaSolid",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcFace",
      "group": 1,
      "details": {
        "definition": " IfcFace\n SUPERTYPE OF (ONEOF\n\t(IfcFaceSurface))\n SUBTYPE OF (IfcTopologicalRepresentationItem);\n\tBounds : SET [1:?] OF IfcFaceBound;\n WHERE\n\tWR1 : SIZEOF(QUERY(temp <* Bounds | 'IFC2X3.IFCFACEOUTERBOUND' IN TYPEOF(temp))) <= 1;\n"
      }
    },
    {
      "id": "IfcFaceBasedSurfaceModel",
      "group": 1,
      "details": {
        "definition": " IfcFaceBasedSurfaceModel\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tFbsmFaces : SET [1:?] OF IfcConnectedFaceSet;\n DERIVE\n\tDim : IfcDimensionCount := 3;\n"
      }
    },
    {
      "id": "IfcFaceBound",
      "group": 1,
      "details": {
        "definition": " IfcFaceBound\n SUPERTYPE OF (ONEOF\n\t(IfcFaceOuterBound))\n SUBTYPE OF (IfcTopologicalRepresentationItem);\n\tBound : IfcLoop;\n\tOrientation : BOOLEAN;\n"
      }
    },
    {
      "id": "IfcFaceOuterBound",
      "group": 1,
      "details": {
        "definition": " IfcFaceOuterBound\n SUBTYPE OF (IfcFaceBound);\n"
      }
    },
    {
      "id": "IfcFaceSurface",
      "group": 1,
      "details": {
        "definition": " IfcFaceSurface\n SUBTYPE OF (IfcFace);\n\tFaceSurface : IfcSurface;\n\tSameSense : BOOLEAN;\n"
      }
    },
    {
      "id": "IfcFacetedBrep",
      "group": 1,
      "details": {
        "definition": " IfcFacetedBrep\n SUBTYPE OF (IfcManifoldSolidBrep);\n"
      }
    },
    {
      "id": "IfcManifoldSolidBrep",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcFacetedBrepWithVoids",
      "group": 1,
      "details": {
        "definition": " IfcFacetedBrepWithVoids\n SUBTYPE OF (IfcManifoldSolidBrep);\n\tVoids : SET [1:?] OF IfcClosedShell;\n"
      }
    },
    {
      "id": "IfcFailureConnectionCondition",
      "group": 1,
      "details": {
        "definition": " IfcFailureConnectionCondition\n SUBTYPE OF (IfcStructuralConnectionCondition);\n\tTensionFailureX : OPTIONAL IfcForceMeasure;\n\tTensionFailureY : OPTIONAL IfcForceMeasure;\n\tTensionFailureZ : OPTIONAL IfcForceMeasure;\n\tCompressionFailureX : OPTIONAL IfcForceMeasure;\n\tCompressionFailureY : OPTIONAL IfcForceMeasure;\n\tCompressionFailureZ : OPTIONAL IfcForceMeasure;\n"
      }
    },
    {
      "id": "IfcStructuralConnectionCondition",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcFanType",
      "group": 1,
      "details": {
        "definition": " IfcFanType\n SUBTYPE OF (IfcFlowMovingDeviceType);\n\tPredefinedType : IfcFanTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcFanTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcFanTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcFanTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcFastener",
      "group": 1,
      "details": {
        "definition": " IfcFastener\n SUPERTYPE OF (ONEOF\n\t(IfcMechanicalFastener))\n SUBTYPE OF (IfcElementComponent);\n"
      }
    },
    {
      "id": "IfcFastenerType",
      "group": 1,
      "details": {
        "definition": " IfcFastenerType\n SUPERTYPE OF (ONEOF\n\t(IfcMechanicalFastenerType))\n SUBTYPE OF (IfcElementComponentType);\n"
      }
    },
    {
      "id": "IfcFeatureElement",
      "group": 1,
      "details": {
        "definition": " IfcFeatureElement\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcFeatureElementAddition\n\t,IfcFeatureElementSubtraction))\n SUBTYPE OF (IfcElement);\n"
      }
    },
    {
      "id": "IfcFeatureElementAddition",
      "group": 1,
      "details": {
        "definition": " IfcFeatureElementAddition\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcProjectionElement))\n SUBTYPE OF (IfcFeatureElement);\n INVERSE\n\tProjectsElements : IfcRelProjectsElement FOR RelatedFeatureElement;\n"
      }
    },
    {
      "id": "IfcFillAreaStyle",
      "group": 1,
      "details": {
        "definition": " IfcFillAreaStyle\n SUBTYPE OF (IfcPresentationStyle);\n\tFillStyles : SET [1:?] OF IfcFillStyleSelect;\n WHERE\n\tWR11 : SIZEOF(QUERY(Style <* SELF.FillStyles |\n               'IFC2X3.IFCCOLOUR' IN\n                TYPEOF(Style)\n               )) <= 1;\n\tWR12 : SIZEOF(QUERY(Style <* SELF.FillStyles |\n               'IFC2X3.IFCEXTERNALLYDEFINEDHATCHSTYLE' IN\n                TYPEOF(Style)\n               )) <= 1;\n\tWR13 : (SIZEOF(QUERY(Style <* SELF.FillStyles |\n               'IFC2X3.IFCEXTERNALLYDEFINEDHATCHSTYLE' IN\n                TYPEOF(Style)\n               )) >= 1)\n             XOR\n             (SIZEOF(QUERY(Style <* SELF.FillStyles |\n               'IFC2X3.IFCFILLAREASTYLEHATCHING' IN\n                TYPEOF(Style)\n               )) >= 1)\n             XOR\n             (SIZEOF(QUERY(Style <* SELF.FillStyles |\n               'IFC2X3.IFCFILLAREASTYLETILES' IN\n                TYPEOF(Style)\n               )) >= 1);\n"
      }
    },
    {
      "id": "IfcFillAreaStyleHatching",
      "group": 1,
      "details": {
        "definition": " IfcFillAreaStyleHatching\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tHatchLineAppearance : IfcCurveStyle;\n\tStartOfNextHatchLine : IfcHatchLineDistanceSelect;\n\tPointOfReferenceHatchLine : OPTIONAL IfcCartesianPoint;\n\tPatternStart : OPTIONAL IfcCartesianPoint;\n\tHatchLineAngle : IfcPlaneAngleMeasure;\n WHERE\n\tWR21 : NOT(\n              'IFC2X3.IFCTWODIRECTIONREPEATFACTOR' \n              IN TYPEOF(StartOfNextHatchLine)\n             );\n\tWR22 : NOT(EXISTS(PatternStart)) \n             OR (PatternStart.Dim = 2);\n\tWR23 : NOT(EXISTS(PointOfReferenceHatchLine)) \n             OR (PointOfReferenceHatchLine.Dim = 2);\n"
      }
    },
    {
      "id": "IfcHatchLineDistanceSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPlaneAngleMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcFillAreaStyleTileSymbolWithStyle",
      "group": 1,
      "details": {
        "definition": " IfcFillAreaStyleTileSymbolWithStyle\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tSymbol : IfcAnnotationSymbolOccurrence;\n"
      }
    },
    {
      "id": "IfcFillAreaStyleTiles",
      "group": 1,
      "details": {
        "definition": " IfcFillAreaStyleTiles\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tTilingPattern : IfcOneDirectionRepeatFactor;\n\tTiles : SET [1:?] OF IfcFillAreaStyleTileShapeSelect;\n\tTilingScale : IfcPositiveRatioMeasure;\n"
      }
    },
    {
      "id": "IfcOneDirectionRepeatFactor",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcFilterType",
      "group": 1,
      "details": {
        "definition": " IfcFilterType\n SUBTYPE OF (IfcFlowTreatmentDeviceType);\n\tPredefinedType : IfcFilterTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcFilterTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcFilterTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcFilterTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcFireSuppressionTerminalType",
      "group": 1,
      "details": {
        "definition": " IfcFireSuppressionTerminalType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcFireSuppressionTerminalTypeEnum;\n"
      }
    },
    {
      "id": "IfcFireSuppressionTerminalTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcFlowFitting",
      "group": 1,
      "details": {
        "definition": " IfcFlowFitting\n SUBTYPE OF (IfcDistributionFlowElement);\n"
      }
    },
    {
      "id": "IfcFlowInstrumentType",
      "group": 1,
      "details": {
        "definition": " IfcFlowInstrumentType\n SUBTYPE OF (IfcDistributionControlElementType);\n\tPredefinedType : IfcFlowInstrumentTypeEnum;\n"
      }
    },
    {
      "id": "IfcFlowInstrumentTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcFlowMeterType",
      "group": 1,
      "details": {
        "definition": " IfcFlowMeterType\n SUBTYPE OF (IfcFlowControllerType);\n\tPredefinedType : IfcFlowMeterTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcFlowMeterTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcFlowMeterTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcFlowMeterTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcFlowMovingDevice",
      "group": 1,
      "details": {
        "definition": " IfcFlowMovingDevice\n SUBTYPE OF (IfcDistributionFlowElement);\n"
      }
    },
    {
      "id": "IfcFlowSegment",
      "group": 1,
      "details": {
        "definition": " IfcFlowSegment\n SUBTYPE OF (IfcDistributionFlowElement);\n"
      }
    },
    {
      "id": "IfcFlowStorageDevice",
      "group": 1,
      "details": {
        "definition": " IfcFlowStorageDevice\n SUBTYPE OF (IfcDistributionFlowElement);\n"
      }
    },
    {
      "id": "IfcFlowTerminal",
      "group": 1,
      "details": {
        "definition": " IfcFlowTerminal\n SUBTYPE OF (IfcDistributionFlowElement);\n"
      }
    },
    {
      "id": "IfcFlowTreatmentDevice",
      "group": 1,
      "details": {
        "definition": " IfcFlowTreatmentDevice\n SUBTYPE OF (IfcDistributionFlowElement);\n"
      }
    },
    {
      "id": "IfcFluidFlowProperties",
      "group": 1,
      "details": {
        "definition": " IfcFluidFlowProperties\n SUBTYPE OF (IfcPropertySetDefinition);\n\tPropertySource : IfcPropertySourceEnum;\n\tFlowConditionTimeSeries : OPTIONAL IfcTimeSeries;\n\tVelocityTimeSeries : OPTIONAL IfcTimeSeries;\n\tFlowrateTimeSeries : OPTIONAL IfcTimeSeries;\n\tFluid : IfcMaterial;\n\tPressureTimeSeries : OPTIONAL IfcTimeSeries;\n\tUserDefinedPropertySource : OPTIONAL IfcLabel;\n\tTemperatureSingleValue : OPTIONAL IfcThermodynamicTemperatureMeasure;\n\tWetBulbTemperatureSingleValue : OPTIONAL IfcThermodynamicTemperatureMeasure;\n\tWetBulbTemperatureTimeSeries : OPTIONAL IfcTimeSeries;\n\tTemperatureTimeSeries : OPTIONAL IfcTimeSeries;\n\tFlowrateSingleValue : OPTIONAL IfcDerivedMeasureValue;\n\tFlowConditionSingleValue : OPTIONAL IfcPositiveRatioMeasure;\n\tVelocitySingleValue : OPTIONAL IfcLinearVelocityMeasure;\n\tPressureSingleValue : OPTIONAL IfcPressureMeasure;\n"
      }
    },
    {
      "id": "IfcPropertySourceEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcMaterial",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcFooting",
      "group": 1,
      "details": {
        "definition": " IfcFooting\n SUBTYPE OF (IfcBuildingElement);\n\tPredefinedType : IfcFootingTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcFootingTypeEnum.USERDEFINED) OR ((PredefinedType = IfcFootingTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcObject.ObjectType));\n"
      }
    },
    {
      "id": "IfcFootingTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcFuelProperties",
      "group": 1,
      "details": {
        "definition": " IfcFuelProperties\n SUBTYPE OF (IfcMaterialProperties);\n\tCombustionTemperature : OPTIONAL IfcThermodynamicTemperatureMeasure;\n\tCarbonContent : OPTIONAL IfcPositiveRatioMeasure;\n\tLowerHeatingValue : OPTIONAL IfcHeatingValueMeasure;\n\tHigherHeatingValue : OPTIONAL IfcHeatingValueMeasure;\n UNIQUE\n\tUR11 : Material;\n"
      }
    },
    {
      "id": "IfcFurnishingElement",
      "group": 1,
      "details": {
        "definition": " IfcFurnishingElement\n SUBTYPE OF (IfcElement);\n"
      }
    },
    {
      "id": "IfcFurnishingElementType",
      "group": 1,
      "details": {
        "definition": " IfcFurnishingElementType\n SUPERTYPE OF (ONEOF\n\t(IfcFurnitureType\n\t,IfcSystemFurnitureElementType))\n SUBTYPE OF (IfcElementType);\n"
      }
    },
    {
      "id": "IfcFurnitureStandard",
      "group": 1,
      "details": {
        "definition": " IfcFurnitureStandard\n SUBTYPE OF (IfcControl);\n"
      }
    },
    {
      "id": "IfcFurnitureType",
      "group": 1,
      "details": {
        "definition": " IfcFurnitureType\n SUBTYPE OF (IfcFurnishingElementType);\n\tAssemblyPlace : IfcAssemblyPlaceEnum;\n"
      }
    },
    {
      "id": "IfcAssemblyPlaceEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcGasTerminalType",
      "group": 1,
      "details": {
        "definition": " IfcGasTerminalType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcGasTerminalTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcGasTerminalTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcGasTerminalTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcGasTerminalTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcGeneralMaterialProperties",
      "group": 1,
      "details": {
        "definition": " IfcGeneralMaterialProperties\n SUBTYPE OF (IfcMaterialProperties);\n\tMolecularWeight : OPTIONAL IfcMolecularWeightMeasure;\n\tPorosity : OPTIONAL IfcNormalisedRatioMeasure;\n\tMassDensity : OPTIONAL IfcMassDensityMeasure;\n UNIQUE\n\tUR11 : Material;\n"
      }
    },
    {
      "id": "IfcGeneralProfileProperties",
      "group": 1,
      "details": {
        "definition": " IfcGeneralProfileProperties\n SUPERTYPE OF (ONEOF\n\t(IfcStructuralProfileProperties))\n SUBTYPE OF (IfcProfileProperties);\n\tPhysicalWeight : OPTIONAL IfcMassPerLengthMeasure;\n\tPerimeter : OPTIONAL IfcPositiveLengthMeasure;\n\tMinimumPlateThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tMaximumPlateThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tCrossSectionArea : OPTIONAL IfcAreaMeasure;\n WHERE\n\tWR1 : NOT(EXISTS(CrossSectionArea)) OR (CrossSectionArea > 0.);\n"
      }
    },
    {
      "id": "IfcProfileProperties",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcGeometricCurveSet",
      "group": 1,
      "details": {
        "definition": " IfcGeometricCurveSet\n SUBTYPE OF (IfcGeometricSet);\n WHERE\n\tWR1 : SIZEOF(QUERY(Temp <* SELF\\IfcGeometricSet.Elements |\n            'IFC2X3.IFCSURFACE' IN TYPEOF(Temp))) = 0;\n"
      }
    },
    {
      "id": "IfcGeometricSet",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcGeometricRepresentationContext",
      "group": 1,
      "details": {
        "definition": " IfcGeometricRepresentationContext\n SUPERTYPE OF (ONEOF\n\t(IfcGeometricRepresentationSubContext))\n SUBTYPE OF (IfcRepresentationContext);\n\tCoordinateSpaceDimension : IfcDimensionCount;\n\tPrecision : OPTIONAL REAL;\n\tWorldCoordinateSystem : IfcAxis2Placement;\n\tTrueNorth : OPTIONAL IfcDirection;\n INVERSE\n\tHasSubContexts : SET [0:?] OF IfcGeometricRepresentationSubContext FOR ParentContext;\n"
      }
    },
    {
      "id": "IfcRepresentationContext",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcDimensionCount",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRepresentationItem",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcGeometricRepresentationSubContext",
      "group": 1,
      "details": {
        "definition": " IfcGeometricRepresentationSubContext\n SUBTYPE OF (IfcGeometricRepresentationContext);\n\tParentContext : IfcGeometricRepresentationContext;\n\tTargetScale : OPTIONAL IfcPositiveRatioMeasure;\n\tTargetView : IfcGeometricProjectionEnum;\n\tUserDefinedTargetView : OPTIONAL IfcLabel;\n DERIVE\n\tSELF\\IfcGeometricRepresentationContext.WorldCoordinateSystem : IfcAxis2Placement := ParentContext.WorldCoordinateSystem;\n\tSELF\\IfcGeometricRepresentationContext.CoordinateSpaceDimension : IfcDimensionCount := ParentContext.CoordinateSpaceDimension;\n\tSELF\\IfcGeometricRepresentationContext.TrueNorth : IfcDirection := NVL(ParentContext.TrueNorth,SELF.WorldCoordinateSystem.P[2]);\n\tSELF\\IfcGeometricRepresentationContext.Precision : REAL := NVL(ParentContext.Precision,1.E-5);\n WHERE\n\tWR31 : NOT('IFC2X3.IFCGEOMETRICREPRESENTATIONSUBCONTEXT' IN TYPEOF(ParentContext));\n\tWR32 : (TargetView <> IfcGeometricProjectionEnum.USERDEFINED) OR \n             ((TargetView =  IfcGeometricProjectionEnum.USERDEFINED) AND \n              EXISTS(UserDefinedTargetView));\n"
      }
    },
    {
      "id": "IfcGeometricProjectionEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcGrid",
      "group": 1,
      "details": {
        "definition": " IfcGrid\n SUBTYPE OF (IfcProduct);\n\tUAxes : LIST [1:?] OF UNIQUE IfcGridAxis;\n\tVAxes : LIST [1:?] OF UNIQUE IfcGridAxis;\n\tWAxes : OPTIONAL LIST [1:?] OF UNIQUE IfcGridAxis;\n INVERSE\n\tContainedInStructure : SET [0:1] OF IfcRelContainedInSpatialStructure FOR RelatedElements;\n WHERE\n\tWR41 : EXISTS(SELF\\IfcProduct.ObjectPlacement);\n"
      }
    },
    {
      "id": "IfcGridAxis",
      "group": 1,
      "details": {
        "definition": " IfcGridAxis;\n\tAxisTag : OPTIONAL IfcLabel;\n\tAxisCurve : IfcCurve;\n\tSameSense : IfcBoolean;\n INVERSE\n\tPartOfW : SET [0:1] OF IfcGrid FOR WAxes;\n\tPartOfV : SET [0:1] OF IfcGrid FOR VAxes;\n\tPartOfU : SET [0:1] OF IfcGrid FOR UAxes;\n\tHasIntersections : SET [0:?] OF IfcVirtualGridIntersection FOR IntersectingAxes;\n WHERE\n\tWR1 : AxisCurve.Dim = 2;\n\tWR2 : (SIZEOF(PartOfU) = 1) XOR (SIZEOF(PartOfV) = 1) XOR (SIZEOF(PartOfW) = 1);\n"
      }
    },
    {
      "id": "IfcBoolean",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcGridPlacement",
      "group": 1,
      "details": {
        "definition": " IfcGridPlacement\n SUBTYPE OF (IfcObjectPlacement);\n\tPlacementLocation : IfcVirtualGridIntersection;\n\tPlacementRefDirection : OPTIONAL IfcVirtualGridIntersection;\n"
      }
    },
    {
      "id": "IfcObjectPlacement",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcVirtualGridIntersection",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcHeatExchangerType",
      "group": 1,
      "details": {
        "definition": " IfcHeatExchangerType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcHeatExchangerTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcHeatExchangerTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcHeatExchangerTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcHeatExchangerTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcHumidifierType",
      "group": 1,
      "details": {
        "definition": " IfcHumidifierType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcHumidifierTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcHumidifierTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcHumidifierTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcHumidifierTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcHygroscopicMaterialProperties",
      "group": 1,
      "details": {
        "definition": " IfcHygroscopicMaterialProperties\n SUBTYPE OF (IfcMaterialProperties);\n\tUpperVaporResistanceFactor : OPTIONAL IfcPositiveRatioMeasure;\n\tLowerVaporResistanceFactor : OPTIONAL IfcPositiveRatioMeasure;\n\tIsothermalMoistureCapacity : OPTIONAL IfcIsothermalMoistureCapacityMeasure;\n\tVaporPermeability : OPTIONAL IfcVaporPermeabilityMeasure;\n\tMoistureDiffusivity : OPTIONAL IfcMoistureDiffusivityMeasure;\n UNIQUE\n\tUR11 : Material;\n"
      }
    },
    {
      "id": "IfcImageTexture",
      "group": 1,
      "details": {
        "definition": " IfcImageTexture\n SUBTYPE OF (IfcSurfaceTexture);\n\tUrlReference : IfcIdentifier;\n"
      }
    },
    {
      "id": "IfcInventory",
      "group": 1,
      "details": {
        "definition": " IfcInventory\n SUBTYPE OF (IfcGroup);\n\tInventoryType : IfcInventoryTypeEnum;\n\tJurisdiction : IfcActorSelect;\n\tResponsiblePersons : SET [1:?] OF IfcPerson;\n\tLastUpdateDate : IfcCalendarDate;\n\tCurrentValue : OPTIONAL IfcCostValue;\n\tOriginalValue : OPTIONAL IfcCostValue;\n WHERE\n\tWR41 : SIZEOF(QUERY(temp <* SELF\\IfcGroup.IsGroupedBy.RelatedObjects |\n                 NOT( ('IFC2X3.IFCSPACE' IN TYPEOF (temp)) OR \n                      ('IFC2X3.IFCASSET' IN TYPEOF (temp)) OR\n                      ('IFC2X3.IFCFURNISHINGELEMENT' IN TYPEOF (temp))\n                 ))) = 0;\n"
      }
    },
    {
      "id": "IfcInventoryTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcIrregularTimeSeries",
      "group": 1,
      "details": {
        "definition": " IfcIrregularTimeSeries\n SUBTYPE OF (IfcTimeSeries);\n\tValues : LIST [1:?] OF IfcIrregularTimeSeriesValue;\n"
      }
    },
    {
      "id": "IfcTimeSeries",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcIrregularTimeSeriesValue",
      "group": 1,
      "details": {
        "definition": " IfcIrregularTimeSeriesValue;\n\tTimeStamp : IfcDateTimeSelect;\n\tListValues : LIST [1:?] OF IfcValue;\n"
      }
    },
    {
      "id": "IfcJunctionBoxType",
      "group": 1,
      "details": {
        "definition": " IfcJunctionBoxType\n SUBTYPE OF (IfcFlowFittingType);\n\tPredefinedType : IfcJunctionBoxTypeEnum;\n"
      }
    },
    {
      "id": "IfcJunctionBoxTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLShapeProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcLShapeProfileDef\n SUBTYPE OF (IfcParameterizedProfileDef);\n\tDepth : IfcPositiveLengthMeasure;\n\tWidth : OPTIONAL IfcPositiveLengthMeasure;\n\tThickness : IfcPositiveLengthMeasure;\n\tFilletRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tEdgeRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tLegSlope : OPTIONAL IfcPlaneAngleMeasure;\n\tCentreOfGravityInX : OPTIONAL IfcPositiveLengthMeasure;\n\tCentreOfGravityInY : OPTIONAL IfcPositiveLengthMeasure;\n WHERE\n\tWR21 : Thickness < Depth;\n\tWR22 : NOT(EXISTS(Width)) OR (Thickness < Width);\n"
      }
    },
    {
      "id": "IfcLaborResource",
      "group": 1,
      "details": {
        "definition": " IfcLaborResource\n SUBTYPE OF (IfcConstructionResource);\n\tSkillSet : OPTIONAL IfcText;\n"
      }
    },
    {
      "id": "IfcLampType",
      "group": 1,
      "details": {
        "definition": " IfcLampType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcLampTypeEnum;\n"
      }
    },
    {
      "id": "IfcLampTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLibraryInformation",
      "group": 1,
      "details": {
        "definition": " IfcLibraryInformation;\n\tName : IfcLabel;\n\tVersion : OPTIONAL IfcLabel;\n\tPublisher : OPTIONAL IfcOrganization;\n\tVersionDate : OPTIONAL IfcCalendarDate;\n\tLibraryReference : OPTIONAL SET [1:?] OF IfcLibraryReference;\n"
      }
    },
    {
      "id": "IfcLibraryReference",
      "group": 1,
      "details": {
        "definition": " IfcLibraryReference\n SUBTYPE OF (IfcExternalReference);\n INVERSE\n\tReferenceIntoLibrary : SET [0:1] OF IfcLibraryInformation FOR LibraryReference;\n"
      }
    },
    {
      "id": "IfcLightDistributionData",
      "group": 1,
      "details": {
        "definition": " IfcLightDistributionData;\n\tMainPlaneAngle : IfcPlaneAngleMeasure;\n\tSecondaryPlaneAngle : LIST [1:?] OF IfcPlaneAngleMeasure;\n\tLuminousIntensity : LIST [1:?] OF IfcLuminousIntensityDistributionMeasure;\n"
      }
    },
    {
      "id": "IfcLightFixtureType",
      "group": 1,
      "details": {
        "definition": " IfcLightFixtureType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcLightFixtureTypeEnum;\n"
      }
    },
    {
      "id": "IfcLightFixtureTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLightIntensityDistribution",
      "group": 1,
      "details": {
        "definition": " IfcLightIntensityDistribution;\n\tLightDistributionCurve : IfcLightDistributionCurveEnum;\n\tDistributionData : LIST [1:?] OF IfcLightDistributionData;\n"
      }
    },
    {
      "id": "IfcLightDistributionCurveEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLightSource",
      "group": 1,
      "details": {
        "definition": " IfcLightSource\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcLightSourceAmbient\n\t,IfcLightSourceDirectional\n\t,IfcLightSourceGoniometric\n\t,IfcLightSourcePositional))\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tName : OPTIONAL IfcLabel;\n\tLightColour : IfcColourRgb;\n\tAmbientIntensity : OPTIONAL IfcNormalisedRatioMeasure;\n\tIntensity : OPTIONAL IfcNormalisedRatioMeasure;\n"
      }
    },
    {
      "id": "IfcLightSourceAmbient",
      "group": 1,
      "details": {
        "definition": " IfcLightSourceAmbient\n SUBTYPE OF (IfcLightSource);\n"
      }
    },
    {
      "id": "IfcLightSourceDirectional",
      "group": 1,
      "details": {
        "definition": " IfcLightSourceDirectional\n SUBTYPE OF (IfcLightSource);\n\tOrientation : IfcDirection;\n"
      }
    },
    {
      "id": "IfcLightSourceGoniometric",
      "group": 1,
      "details": {
        "definition": " IfcLightSourceGoniometric\n SUBTYPE OF (IfcLightSource);\n\tPosition : IfcAxis2Placement3D;\n\tColourAppearance : OPTIONAL IfcColourRgb;\n\tColourTemperature : IfcThermodynamicTemperatureMeasure;\n\tLuminousFlux : IfcLuminousFluxMeasure;\n\tLightEmissionSource : IfcLightEmissionSourceEnum;\n\tLightDistributionDataSource : IfcLightDistributionDataSourceSelect;\n"
      }
    },
    {
      "id": "IfcThermodynamicTemperatureMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLuminousFluxMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLightEmissionSourceEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLightDistributionDataSourceSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLightSourcePositional",
      "group": 1,
      "details": {
        "definition": " IfcLightSourcePositional\n SUPERTYPE OF (ONEOF\n\t(IfcLightSourceSpot))\n SUBTYPE OF (IfcLightSource);\n\tPosition : IfcCartesianPoint;\n\tRadius : IfcPositiveLengthMeasure;\n\tConstantAttenuation : IfcReal;\n\tDistanceAttenuation : IfcReal;\n\tQuadricAttenuation : IfcReal;\n"
      }
    },
    {
      "id": "IfcReal",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLightSourceSpot",
      "group": 1,
      "details": {
        "definition": " IfcLightSourceSpot\n SUBTYPE OF (IfcLightSourcePositional);\n\tOrientation : IfcDirection;\n\tConcentrationExponent : OPTIONAL IfcReal;\n\tSpreadAngle : IfcPositivePlaneAngleMeasure;\n\tBeamWidthAngle : IfcPositivePlaneAngleMeasure;\n"
      }
    },
    {
      "id": "IfcPositivePlaneAngleMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLine",
      "group": 1,
      "details": {
        "definition": " IfcLine\n SUBTYPE OF (IfcCurve);\n\tPnt : IfcCartesianPoint;\n\tDir : IfcVector;\n WHERE\n\tWR1 : Dir.Dim = Pnt.Dim;\n"
      }
    },
    {
      "id": "IfcVector",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcLinearDimension",
      "group": 1,
      "details": {
        "definition": " IfcLinearDimension\n SUBTYPE OF (IfcDimensionCurveDirectedCallout);\n"
      }
    },
    {
      "id": "IfcLocalPlacement",
      "group": 1,
      "details": {
        "definition": " IfcLocalPlacement\n SUBTYPE OF (IfcObjectPlacement);\n\tPlacementRelTo : OPTIONAL IfcObjectPlacement;\n\tRelativePlacement : IfcAxis2Placement;\n WHERE\n\tWR21 : IfcCorrectLocalPlacement(RelativePlacement, PlacementRelTo);\n"
      }
    },
    {
      "id": "IfcMappedItem",
      "group": 1,
      "details": {
        "definition": " IfcMappedItem\n SUBTYPE OF (IfcRepresentationItem);\n\tMappingSource : IfcRepresentationMap;\n\tMappingTarget : IfcCartesianTransformationOperator;\n"
      }
    },
    {
      "id": "IfcRepresentationMap",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcMaterialClassificationRelationship",
      "group": 1,
      "details": {
        "definition": " IfcMaterialClassificationRelationship;\n\tMaterialClassifications : SET [1:?] OF IfcClassificationNotationSelect;\n\tClassifiedMaterial : IfcMaterial;\n"
      }
    },
    {
      "id": "IfcMaterialDefinitionRepresentation",
      "group": 1,
      "details": {
        "definition": " IfcMaterialDefinitionRepresentation\n SUBTYPE OF (IfcProductRepresentation);\n\tRepresentedMaterial : IfcMaterial;\n WHERE\n\tWR11 : SIZEOF(QUERY(temp <* Representations | \n               (NOT('IFC2X3.IFCSTYLEDREPRESENTATION' IN TYPEOF(temp)))\n             )) = 0;\n"
      }
    },
    {
      "id": "IfcProductRepresentation",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcMaterialLayer",
      "group": 1,
      "details": {
        "definition": " IfcMaterialLayer;\n\tMaterial : OPTIONAL IfcMaterial;\n\tLayerThickness : IfcPositiveLengthMeasure;\n\tIsVentilated : OPTIONAL IfcLogical;\n INVERSE\n\tToMaterialLayerSet : IfcMaterialLayerSet FOR MaterialLayers;\n"
      }
    },
    {
      "id": "IfcMaterialLayerSet",
      "group": 1,
      "details": {
        "definition": " IfcMaterialLayerSet;\n\tMaterialLayers : LIST [1:?] OF IfcMaterialLayer;\n\tLayerSetName : OPTIONAL IfcLabel;\n DERIVE\n\tTotalThickness : IfcLengthMeasure := IfcMlsTotalThickness(SELF);\n"
      }
    },
    {
      "id": "IfcMaterialLayerSetUsage",
      "group": 1,
      "details": {
        "definition": " IfcMaterialLayerSetUsage;\n\tForLayerSet : IfcMaterialLayerSet;\n\tLayerSetDirection : IfcLayerSetDirectionEnum;\n\tDirectionSense : IfcDirectionSenseEnum;\n\tOffsetFromReferenceLine : IfcLengthMeasure;\n"
      }
    },
    {
      "id": "IfcLayerSetDirectionEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDirectionSenseEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcMaterialList",
      "group": 1,
      "details": {
        "definition": " IfcMaterialList;\n\tMaterials : LIST [1:?] OF IfcMaterial;\n"
      }
    },
    {
      "id": "IfcValue",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcUnit",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcMechanicalConcreteMaterialProperties",
      "group": 1,
      "details": {
        "definition": " IfcMechanicalConcreteMaterialProperties\n SUBTYPE OF (IfcMechanicalMaterialProperties);\n\tCompressiveStrength : OPTIONAL IfcPressureMeasure;\n\tMaxAggregateSize : OPTIONAL IfcPositiveLengthMeasure;\n\tAdmixturesDescription : OPTIONAL IfcText;\n\tWorkability : OPTIONAL IfcText;\n\tProtectivePoreRatio : OPTIONAL IfcNormalisedRatioMeasure;\n\tWaterImpermeability : OPTIONAL IfcText;\n"
      }
    },
    {
      "id": "IfcMechanicalMaterialProperties",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcMechanicalFastener",
      "group": 1,
      "details": {
        "definition": " IfcMechanicalFastener\n SUBTYPE OF (IfcFastener);\n\tNominalDiameter : OPTIONAL IfcPositiveLengthMeasure;\n\tNominalLength : OPTIONAL IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcMechanicalFastenerType",
      "group": 1,
      "details": {
        "definition": " IfcMechanicalFastenerType\n SUBTYPE OF (IfcFastenerType);\n"
      }
    },
    {
      "id": "IfcMechanicalSteelMaterialProperties",
      "group": 1,
      "details": {
        "definition": " IfcMechanicalSteelMaterialProperties\n SUBTYPE OF (IfcMechanicalMaterialProperties);\n\tYieldStress : OPTIONAL IfcPressureMeasure;\n\tUltimateStress : OPTIONAL IfcPressureMeasure;\n\tUltimateStrain : OPTIONAL IfcPositiveRatioMeasure;\n\tHardeningModule : OPTIONAL IfcModulusOfElasticityMeasure;\n\tProportionalStress : OPTIONAL IfcPressureMeasure;\n\tPlasticStrain : OPTIONAL IfcPositiveRatioMeasure;\n\tRelaxations : OPTIONAL SET [1:?] OF IfcRelaxation;\n WHERE\n\tWR31 : NOT(EXISTS(YieldStress)) OR (YieldStress >= 0.);\n\tWR32 : NOT(EXISTS(UltimateStress)) OR (UltimateStress >= 0.);\n\tWR33 : NOT(EXISTS(HardeningModule)) OR (HardeningModule >= 0.);\n\tWR34 : NOT(EXISTS(ProportionalStress)) OR (ProportionalStress >= 0.);\n"
      }
    },
    {
      "id": "IfcMember",
      "group": 1,
      "details": {
        "definition": " IfcMember\n SUBTYPE OF (IfcBuildingElement);\n"
      }
    },
    {
      "id": "IfcMemberType",
      "group": 1,
      "details": {
        "definition": " IfcMemberType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcMemberTypeEnum;\n"
      }
    },
    {
      "id": "IfcMemberTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcMetric",
      "group": 1,
      "details": {
        "definition": " IfcMetric\n SUBTYPE OF (IfcConstraint);\n\tBenchmark : IfcBenchmarkEnum;\n\tValueSource : OPTIONAL IfcLabel;\n\tDataValue : IfcMetricValueSelect;\n"
      }
    },
    {
      "id": "IfcBenchmarkEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcMetricValueSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcCurrencyEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcMotorConnectionType",
      "group": 1,
      "details": {
        "definition": " IfcMotorConnectionType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcMotorConnectionTypeEnum;\n"
      }
    },
    {
      "id": "IfcMotorConnectionTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcMove",
      "group": 1,
      "details": {
        "definition": " IfcMove\n SUBTYPE OF (IfcTask);\n\tMoveFrom : IfcSpatialStructureElement;\n\tMoveTo : IfcSpatialStructureElement;\n\tPunchList : OPTIONAL LIST [1:?] OF UNIQUE IfcText;\n WHERE\n\tWR1 : SIZEOF(SELF\\IfcProcess.OperatesOn) >= 1;\n\tWR2 : SIZEOF(QUERY(temp <* OperatesOn |\n              SIZEOF(QUERY(temp2 <* temp.RelatedObjects |\n                ('IFC2X3.IFCACTOR' IN TYPEOF (temp2)) OR\n                ('IFC2X3.IFCEQUIPMENTELEMENT' IN TYPEOF (temp2)) OR\n                ('IFC2X3.IFCFURNISHINGELEMENT' IN TYPEOF (temp2)) )) >=1\n              )) >= 1;\n\tWR3 : EXISTS(SELF\\IfcRoot.Name);\n"
      }
    },
    {
      "id": "IfcTask",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcUnitEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcObjectDefinition",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcRoot",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcObjective",
      "group": 1,
      "details": {
        "definition": " IfcObjective\n SUBTYPE OF (IfcConstraint);\n\tBenchmarkValues : OPTIONAL IfcMetric;\n\tResultValues : OPTIONAL IfcMetric;\n\tObjectiveQualifier : IfcObjectiveEnum;\n\tUserDefinedQualifier : OPTIONAL IfcLabel;\n WHERE\n\tWR21 : (ObjectiveQualifier <> IfcObjectiveEnum.USERDEFINED) OR\n             ((ObjectiveQualifier = IfcObjectiveEnum.USERDEFINED) AND EXISTS(SELF\\IfcObjective.UserDefinedQualifier));\n"
      }
    },
    {
      "id": "IfcObjectiveEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcOccupant",
      "group": 1,
      "details": {
        "definition": " IfcOccupant\n SUBTYPE OF (IfcActor);\n\tPredefinedType : IfcOccupantTypeEnum;\n WHERE\n\tWR31 : NOT(PredefinedType = IfcOccupantTypeEnum.USERDEFINED) \n             OR EXISTS(SELF\\IfcObject.ObjectType);\n"
      }
    },
    {
      "id": "IfcOccupantTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcOffsetCurve2D",
      "group": 1,
      "details": {
        "definition": " IfcOffsetCurve2D\n SUBTYPE OF (IfcCurve);\n\tBasisCurve : IfcCurve;\n\tDistance : IfcLengthMeasure;\n\tSelfIntersect : LOGICAL;\n WHERE\n\tWR1 : BasisCurve.Dim = 2;\n"
      }
    },
    {
      "id": "IfcOffsetCurve3D",
      "group": 1,
      "details": {
        "definition": " IfcOffsetCurve3D\n SUBTYPE OF (IfcCurve);\n\tBasisCurve : IfcCurve;\n\tDistance : IfcLengthMeasure;\n\tSelfIntersect : LOGICAL;\n\tRefDirection : IfcDirection;\n WHERE\n\tWR1 : BasisCurve.Dim = 3;\n"
      }
    },
    {
      "id": "IfcOpenShell",
      "group": 1,
      "details": {
        "definition": " IfcOpenShell\n SUBTYPE OF (IfcConnectedFaceSet);\n"
      }
    },
    {
      "id": "IfcOpeningElement",
      "group": 1,
      "details": {
        "definition": " IfcOpeningElement\n SUBTYPE OF (IfcFeatureElementSubtraction);\n INVERSE\n\tHasFillings : SET [0:?] OF IfcRelFillsElement FOR RelatingOpeningElement;\n"
      }
    },
    {
      "id": "IfcOpticalMaterialProperties",
      "group": 1,
      "details": {
        "definition": " IfcOpticalMaterialProperties\n SUBTYPE OF (IfcMaterialProperties);\n\tVisibleTransmittance : OPTIONAL IfcPositiveRatioMeasure;\n\tSolarTransmittance : OPTIONAL IfcPositiveRatioMeasure;\n\tThermalIrTransmittance : OPTIONAL IfcPositiveRatioMeasure;\n\tThermalIrEmissivityBack : OPTIONAL IfcPositiveRatioMeasure;\n\tThermalIrEmissivityFront : OPTIONAL IfcPositiveRatioMeasure;\n\tVisibleReflectanceBack : OPTIONAL IfcPositiveRatioMeasure;\n\tVisibleReflectanceFront : OPTIONAL IfcPositiveRatioMeasure;\n\tSolarReflectanceFront : OPTIONAL IfcPositiveRatioMeasure;\n\tSolarReflectanceBack : OPTIONAL IfcPositiveRatioMeasure;\n UNIQUE\n\tUR11 : Material;\n"
      }
    },
    {
      "id": "IfcOrderAction",
      "group": 1,
      "details": {
        "definition": " IfcOrderAction\n SUBTYPE OF (IfcTask);\n\tActionID : IfcIdentifier;\n UNIQUE\n\tUR2 : ActionID;\n"
      }
    },
    {
      "id": "IfcOrganizationRelationship",
      "group": 1,
      "details": {
        "definition": " IfcOrganizationRelationship;\n\tName : IfcLabel;\n\tDescription : OPTIONAL IfcText;\n\tRelatingOrganization : IfcOrganization;\n\tRelatedOrganizations : SET [1:?] OF IfcOrganization;\n"
      }
    },
    {
      "id": "IfcOrientedEdge",
      "group": 1,
      "details": {
        "definition": " IfcOrientedEdge\n SUBTYPE OF (IfcEdge);\n\tEdgeElement : IfcEdge;\n\tOrientation : BOOLEAN;\n DERIVE\n\tSELF\\IfcEdge.EdgeStart : IfcVertex := IfcBooleanChoose \n                               (Orientation, EdgeElement.EdgeStart, EdgeElement.EdgeEnd);\n\tSELF\\IfcEdge.EdgeEnd : IfcVertex := IfcBooleanChoose \n                               (Orientation, EdgeElement.EdgeEnd, EdgeElement.EdgeStart);\n WHERE\n\tWR1 : NOT('IFC2X3.IFCORIENTEDEDGE' IN TYPEOF(EdgeElement));\n"
      }
    },
    {
      "id": "IfcOutletType",
      "group": 1,
      "details": {
        "definition": " IfcOutletType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcOutletTypeEnum;\n"
      }
    },
    {
      "id": "IfcOutletTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcOwnerHistory",
      "group": 1,
      "details": {
        "definition": " IfcOwnerHistory;\n\tOwningUser : IfcPersonAndOrganization;\n\tOwningApplication : IfcApplication;\n\tState : OPTIONAL IfcStateEnum;\n\tChangeAction : IfcChangeActionEnum;\n\tLastModifiedDate : OPTIONAL IfcTimeStamp;\n\tLastModifyingUser : OPTIONAL IfcPersonAndOrganization;\n\tLastModifyingApplication : OPTIONAL IfcApplication;\n\tCreationDate : IfcTimeStamp;\n"
      }
    },
    {
      "id": "IfcPersonAndOrganization",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcChangeActionEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTimeStamp",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPath",
      "group": 1,
      "details": {
        "definition": " IfcPath\n SUBTYPE OF (IfcTopologicalRepresentationItem);\n\tEdgeList : LIST [1:?] OF UNIQUE IfcOrientedEdge;\n WHERE\n\tWR1 : IfcPathHeadToTail(SELF);\n"
      }
    },
    {
      "id": "IfcPerformanceHistory",
      "group": 1,
      "details": {
        "definition": " IfcPerformanceHistory\n SUBTYPE OF (IfcControl);\n\tLifeCyclePhase : IfcLabel;\n"
      }
    },
    {
      "id": "IfcPermeableCoveringProperties",
      "group": 1,
      "details": {
        "definition": " IfcPermeableCoveringProperties\n SUBTYPE OF (IfcPropertySetDefinition);\n\tOperationType : IfcPermeableCoveringOperationEnum;\n\tPanelPosition : IfcWindowPanelPositionEnum;\n\tFrameDepth : OPTIONAL IfcPositiveLengthMeasure;\n\tFrameThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tShapeAspectStyle : OPTIONAL IfcShapeAspect;\n"
      }
    },
    {
      "id": "IfcPermeableCoveringOperationEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcWindowPanelPositionEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPermit",
      "group": 1,
      "details": {
        "definition": " IfcPermit\n SUBTYPE OF (IfcControl);\n\tPermitID : IfcIdentifier;\n UNIQUE\n\tUR2 : PermitID;\n"
      }
    },
    {
      "id": "IfcPhysicalComplexQuantity",
      "group": 1,
      "details": {
        "definition": " IfcPhysicalComplexQuantity\n SUBTYPE OF (IfcPhysicalQuantity);\n\tHasQuantities : SET [1:?] OF IfcPhysicalQuantity;\n\tDiscrimination : IfcLabel;\n\tQuality : OPTIONAL IfcLabel;\n\tUsage : OPTIONAL IfcLabel;\n WHERE\n\tWR21 : SIZEOF(QUERY(temp <* HasQuantities | SELF :=: temp)) = 0;\n"
      }
    },
    {
      "id": "IfcPhysicalQuantity",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcPhysicalSimpleQuantity",
      "group": 1,
      "details": {
        "definition": " IfcPhysicalSimpleQuantity\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcQuantityArea\n\t,IfcQuantityCount\n\t,IfcQuantityLength\n\t,IfcQuantityTime\n\t,IfcQuantityVolume\n\t,IfcQuantityWeight))\n SUBTYPE OF (IfcPhysicalQuantity);\n\tUnit : OPTIONAL IfcNamedUnit;\n"
      }
    },
    {
      "id": "IfcPile",
      "group": 1,
      "details": {
        "definition": " IfcPile\n SUBTYPE OF (IfcBuildingElement);\n\tPredefinedType : IfcPileTypeEnum;\n\tConstructionType : OPTIONAL IfcPileConstructionEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcPileTypeEnum.USERDEFINED) OR ((PredefinedType = IfcPileTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcObject.ObjectType));\n"
      }
    },
    {
      "id": "IfcPileTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPipeFittingType",
      "group": 1,
      "details": {
        "definition": " IfcPipeFittingType\n SUBTYPE OF (IfcFlowFittingType);\n\tPredefinedType : IfcPipeFittingTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcPipeFittingTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcPipeFittingTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcPipeFittingTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPipeSegmentType",
      "group": 1,
      "details": {
        "definition": " IfcPipeSegmentType\n SUBTYPE OF (IfcFlowSegmentType);\n\tPredefinedType : IfcPipeSegmentTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcPipeSegmentTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcPipeSegmentTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcPipeSegmentTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPixelTexture",
      "group": 1,
      "details": {
        "definition": " IfcPixelTexture\n SUBTYPE OF (IfcSurfaceTexture);\n\tWidth : IfcInteger;\n\tHeight : IfcInteger;\n\tColourComponents : IfcInteger;\n\tPixel : LIST [1:?] OF BINARY(32);\n WHERE\n\tWR21 : Width >= 1;\n\tWR22 : Height >= 1;\n\tWR23 : {1 <= ColourComponents <= 4};\n\tWR24 : SIZEOF(Pixel) = (Width * Height);\n"
      }
    },
    {
      "id": "IfcInteger",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPlanarBox",
      "group": 1,
      "details": {
        "definition": " IfcPlanarBox\n SUBTYPE OF (IfcPlanarExtent);\n\tPlacement : IfcAxis2Placement;\n"
      }
    },
    {
      "id": "IfcPlanarExtent",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcPlate",
      "group": 1,
      "details": {
        "definition": " IfcPlate\n SUBTYPE OF (IfcBuildingElement);\n"
      }
    },
    {
      "id": "IfcPlateType",
      "group": 1,
      "details": {
        "definition": " IfcPlateType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcPlateTypeEnum;\n WHERE\n\tWR1 : SIZEOF (QUERY(temp <* SELF\\IfcObjectDefinition.HasAssociations | 'IFC2X3.IFCRELASSOCIATESMATERIAL' IN TYPEOF(temp) )) = 1;\n"
      }
    },
    {
      "id": "IfcPlateTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPointOnCurve",
      "group": 1,
      "details": {
        "definition": " IfcPointOnCurve\n SUBTYPE OF (IfcPoint);\n\tBasisCurve : IfcCurve;\n\tPointParameter : IfcParameterValue;\n DERIVE\n\tDim : IfcDimensionCount := BasisCurve.Dim;\n"
      }
    },
    {
      "id": "IfcParameterValue",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPointOnSurface",
      "group": 1,
      "details": {
        "definition": " IfcPointOnSurface\n SUBTYPE OF (IfcPoint);\n\tBasisSurface : IfcSurface;\n\tPointParameterU : IfcParameterValue;\n\tPointParameterV : IfcParameterValue;\n DERIVE\n\tDim : IfcDimensionCount := BasisSurface.Dim;\n"
      }
    },
    {
      "id": "IfcPolyLoop",
      "group": 1,
      "details": {
        "definition": " IfcPolyLoop\n SUBTYPE OF (IfcLoop);\n\tPolygon : LIST [3:?] OF UNIQUE IfcCartesianPoint;\n WHERE\n\tWR21 : SIZEOF(QUERY(Temp <* Polygon | Temp.Dim <> Polygon[1].Dim)) = 0;\n"
      }
    },
    {
      "id": "IfcPolygonalBoundedHalfSpace",
      "group": 1,
      "details": {
        "definition": " IfcPolygonalBoundedHalfSpace\n SUBTYPE OF (IfcHalfSpaceSolid);\n\tPosition : IfcAxis2Placement3D;\n\tPolygonalBoundary : IfcBoundedCurve;\n WHERE\n\tWR41 : PolygonalBoundary.Dim = 2;\n\tWR42 : SIZEOF(TYPEOF(PolygonalBoundary) * [\n               'IFC2X3.IFCPOLYLINE', \n               'IFC2X3.IFCCOMPOSITECURVE']\n             ) = 1;\n"
      }
    },
    {
      "id": "IfcPolyline",
      "group": 1,
      "details": {
        "definition": " IfcPolyline\n SUBTYPE OF (IfcBoundedCurve);\n\tPoints : LIST [2:?] OF IfcCartesianPoint;\n WHERE\n\tWR41 : SIZEOF(QUERY(Temp <* Points | Temp.Dim <> Points[1].Dim)) = 0;\n"
      }
    },
    {
      "id": "IfcPostalAddress",
      "group": 1,
      "details": {
        "definition": " IfcPostalAddress\n SUBTYPE OF (IfcAddress);\n\tInternalLocation : OPTIONAL IfcLabel;\n\tAddressLines : OPTIONAL LIST [1:?] OF IfcLabel;\n\tPostalBox : OPTIONAL IfcLabel;\n\tTown : OPTIONAL IfcLabel;\n\tRegion : OPTIONAL IfcLabel;\n\tPostalCode : OPTIONAL IfcLabel;\n\tCountry : OPTIONAL IfcLabel;\n WHERE\n\tWR1 : EXISTS (InternalLocation) OR \n            EXISTS (AddressLines) OR\n            EXISTS (PostalBox) OR\n            EXISTS (PostalCode) OR\n            EXISTS (Town) OR \n            EXISTS (Region) OR  \n            EXISTS (Country);\n"
      }
    },
    {
      "id": "IfcPreDefinedItem",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcPreDefinedDimensionSymbol",
      "group": 1,
      "details": {
        "definition": " IfcPreDefinedDimensionSymbol\n SUBTYPE OF (IfcPreDefinedSymbol);\n WHERE\n\tWR31 : SELF\\IfcPreDefinedItem.Name IN ['arc length','conical taper','counterbore',\n                  'countersink','depth','diameter','plus minus','radius',\n                  'slope','spherical diameter','spherical radius','square'];\n"
      }
    },
    {
      "id": "IfcPreDefinedSymbol",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcPreDefinedPointMarkerSymbol",
      "group": 1,
      "details": {
        "definition": " IfcPreDefinedPointMarkerSymbol\n SUBTYPE OF (IfcPreDefinedSymbol);\n WHERE\n\tWR31 : SELF\\IfcPreDefinedItem.Name IN ['asterisk','circle','dot','plus','square','triangle','x'];\n"
      }
    },
    {
      "id": "IfcPreDefinedTerminatorSymbol",
      "group": 1,
      "details": {
        "definition": " IfcPreDefinedTerminatorSymbol\n SUBTYPE OF (IfcPreDefinedSymbol);\n WHERE\n\tWR31 : SELF\\IfcPreDefinedItem.Name IN ['blanked arrow','blanked box',\n                 'blanked dot','dimension origin','filled arrow','filled box',\n                 'filled dot','integral symbol','open arrow','slash','unfilled arrow'];\n"
      }
    },
    {
      "id": "IfcPresentationLayerAssignment",
      "group": 1,
      "details": {
        "definition": " IfcPresentationLayerAssignment\n SUPERTYPE OF (ONEOF\n\t(IfcPresentationLayerWithStyle));\n\tName : IfcLabel;\n\tDescription : OPTIONAL IfcText;\n\tAssignedItems : SET [1:?] OF IfcLayeredItem;\n\tIdentifier : OPTIONAL IfcIdentifier;\n"
      }
    },
    {
      "id": "IfcPresentationLayerWithStyle",
      "group": 1,
      "details": {
        "definition": " IfcPresentationLayerWithStyle\n SUBTYPE OF (IfcPresentationLayerAssignment);\n\tLayerOn : LOGICAL;\n\tLayerFrozen : LOGICAL;\n\tLayerBlocked : LOGICAL;\n\tLayerStyles : SET [0:?] OF IfcPresentationStyleSelect;\n"
      }
    },
    {
      "id": "IfcPresentationStyleAssignment",
      "group": 1,
      "details": {
        "definition": " IfcPresentationStyleAssignment;\n\tStyles : SET [1:?] OF IfcPresentationStyleSelect;\n"
      }
    },
    {
      "id": "IfcProcedure",
      "group": 1,
      "details": {
        "definition": " IfcProcedure\n SUBTYPE OF (IfcProcess);\n\tProcedureID : IfcIdentifier;\n\tProcedureType : IfcProcedureTypeEnum;\n\tUserDefinedProcedureType : OPTIONAL IfcLabel;\n WHERE\n\tWR1 : SIZEOF(QUERY(temp <* SELF\\IfcObjectDefinition.Decomposes | NOT('IFC2X3.IFCRELNESTS' IN TYPEOF(temp)))) = 0;\n\tWR2 : SIZEOF(QUERY(temp <* SELF\\IfcObjectDefinition.IsDecomposedBy | NOT('IFC2X3.IFCRELNESTS' IN TYPEOF(temp)))) = 0;\n\tWR3 : EXISTS(SELF\\IfcRoot.Name);\n\tWR4 : (ProcedureType <> IfcProcedureTypeEnum.USERDEFINED) OR\n            ((ProcedureType = IfcProcedureTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcProcedure.UserDefinedProcedureType));\n"
      }
    },
    {
      "id": "IfcProcess",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcProcedureTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcProductDefinitionShape",
      "group": 1,
      "details": {
        "definition": " IfcProductDefinitionShape\n SUBTYPE OF (IfcProductRepresentation);\n INVERSE\n\tShapeOfProduct : SET [1:1] OF IfcProduct FOR Representation;\n\tHasShapeAspects : SET [0:?] OF IfcShapeAspect FOR PartOfProductDefinitionShape;\n WHERE\n\tWR11 : SIZEOF(QUERY(temp <* Representations | \n               (NOT('IFC2X3.IFCSHAPEMODEL' IN TYPEOF(temp)))\n             )) = 0;\n"
      }
    },
    {
      "id": "IfcProductsOfCombustionProperties",
      "group": 1,
      "details": {
        "definition": " IfcProductsOfCombustionProperties\n SUBTYPE OF (IfcMaterialProperties);\n\tSpecificHeatCapacity : OPTIONAL IfcSpecificHeatCapacityMeasure;\n\tN20Content : OPTIONAL IfcPositiveRatioMeasure;\n\tCOContent : OPTIONAL IfcPositiveRatioMeasure;\n\tCO2Content : OPTIONAL IfcPositiveRatioMeasure;\n UNIQUE\n\tUR11 : Material;\n"
      }
    },
    {
      "id": "IfcProfileTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcProject",
      "group": 1,
      "details": {
        "definition": " IfcProject\n SUBTYPE OF (IfcObject);\n\tLongName : OPTIONAL IfcLabel;\n\tPhase : OPTIONAL IfcLabel;\n\tRepresentationContexts : SET [1:?] OF IfcRepresentationContext;\n\tUnitsInContext : IfcUnitAssignment;\n WHERE\n\tWR31 : EXISTS(SELF\\IfcRoot.Name);\n\tWR32 : SIZEOF(QUERY(Temp <* RepresentationContexts |\n              'IFC2X3.IFCGEOMETRICREPRESENTATIONSUBCONTEXT' IN TYPEOF(Temp)\n             )) = 0;\n\tWR33 : SIZEOF(SELF\\IfcObjectDefinition.Decomposes) = 0;\n"
      }
    },
    {
      "id": "IfcUnitAssignment",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcProjectOrder",
      "group": 1,
      "details": {
        "definition": " IfcProjectOrder\n SUBTYPE OF (IfcControl);\n\tID : IfcIdentifier;\n\tPredefinedType : IfcProjectOrderTypeEnum;\n\tStatus : OPTIONAL IfcLabel;\n UNIQUE\n\tUR2 : ID;\n"
      }
    },
    {
      "id": "IfcProjectOrderTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcProjectOrderRecord",
      "group": 1,
      "details": {
        "definition": " IfcProjectOrderRecord\n SUBTYPE OF (IfcControl);\n\tRecords : LIST [1:?] OF UNIQUE IfcRelAssignsToProjectOrder;\n\tPredefinedType : IfcProjectOrderRecordTypeEnum;\n"
      }
    },
    {
      "id": "IfcProjectOrderRecordTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcProjectionCurve",
      "group": 1,
      "details": {
        "definition": " IfcProjectionCurve\n SUBTYPE OF (IfcAnnotationCurveOccurrence);\n"
      }
    },
    {
      "id": "IfcProjectionElement",
      "group": 1,
      "details": {
        "definition": " IfcProjectionElement\n SUBTYPE OF (IfcFeatureElementAddition);\n"
      }
    },
    {
      "id": "IfcPropertyBoundedValue",
      "group": 1,
      "details": {
        "definition": " IfcPropertyBoundedValue\n SUBTYPE OF (IfcSimpleProperty);\n\tUpperBoundValue : OPTIONAL IfcValue;\n\tLowerBoundValue : OPTIONAL IfcValue;\n\tUnit : OPTIONAL IfcUnit;\n WHERE\n\tWR21 : NOT(EXISTS(UpperBoundValue)) OR NOT(EXISTS(LowerBoundValue)) OR\n             (TYPEOF(UpperBoundValue) = TYPEOF(LowerBoundValue));\n\tWR22 : EXISTS(UpperBoundValue) OR EXISTS(LowerBoundValue);\n"
      }
    },
    {
      "id": "IfcSimpleProperty",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcPropertyConstraintRelationship",
      "group": 1,
      "details": {
        "definition": " IfcPropertyConstraintRelationship;\n\tRelatingConstraint : IfcConstraint;\n\tRelatedProperties : SET [1:?] OF IfcProperty;\n\tName : OPTIONAL IfcLabel;\n\tDescription : OPTIONAL IfcText;\n"
      }
    },
    {
      "id": "IfcPropertyDefinition",
      "group": 1,
      "details": {
        "definition": " IfcPropertyDefinition\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcPropertySetDefinition))\n SUBTYPE OF (IfcRoot);\n INVERSE\n\tHasAssociations : SET [0:?] OF IfcRelAssociates FOR RelatedObjects;\n"
      }
    },
    {
      "id": "IfcPropertyDependencyRelationship",
      "group": 1,
      "details": {
        "definition": " IfcPropertyDependencyRelationship;\n\tDependingProperty : IfcProperty;\n\tDependantProperty : IfcProperty;\n\tName : OPTIONAL IfcLabel;\n\tDescription : OPTIONAL IfcText;\n\tExpression : OPTIONAL IfcText;\n WHERE\n\tWR1 : DependingProperty :<>: DependantProperty;\n"
      }
    },
    {
      "id": "IfcPropertyEnumeratedValue",
      "group": 1,
      "details": {
        "definition": " IfcPropertyEnumeratedValue\n SUBTYPE OF (IfcSimpleProperty);\n\tEnumerationValues : LIST [1:?] OF IfcValue;\n\tEnumerationReference : OPTIONAL IfcPropertyEnumeration;\n WHERE\n\tWR1 : NOT(EXISTS(EnumerationReference)) OR \n               (SIZEOF(QUERY(temp <* EnumerationValues |\n                temp IN EnumerationReference.EnumerationValues))\n                = SIZEOF(EnumerationValues));\n"
      }
    },
    {
      "id": "IfcPropertyEnumeration",
      "group": 1,
      "details": {
        "definition": " IfcPropertyEnumeration;\n\tName : IfcLabel;\n\tEnumerationValues : LIST [1:?] OF UNIQUE IfcValue;\n\tUnit : OPTIONAL IfcUnit;\n UNIQUE\n\tUR1 : Name;\n WHERE\n\tWR01 : SIZEOF(QUERY(temp <* SELF.EnumerationValues | \n               NOT(TYPEOF(SELF.EnumerationValues[1]) = TYPEOF(temp))\n               )) = 0;\n"
      }
    },
    {
      "id": "IfcPropertyListValue",
      "group": 1,
      "details": {
        "definition": " IfcPropertyListValue\n SUBTYPE OF (IfcSimpleProperty);\n\tListValues : LIST [1:?] OF IfcValue;\n\tUnit : OPTIONAL IfcUnit;\n WHERE\n\tWR31 : SIZEOF(QUERY(temp <* SELF.ListValues | \n               NOT(TYPEOF(SELF.ListValues[1]) = TYPEOF(temp))\n               )) = 0;\n"
      }
    },
    {
      "id": "IfcPropertyReferenceValue",
      "group": 1,
      "details": {
        "definition": " IfcPropertyReferenceValue\n SUBTYPE OF (IfcSimpleProperty);\n\tUsageName : OPTIONAL IfcLabel;\n\tPropertyReference : IfcObjectReferenceSelect;\n"
      }
    },
    {
      "id": "IfcObjectReferenceSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPropertySet",
      "group": 1,
      "details": {
        "definition": " IfcPropertySet\n SUBTYPE OF (IfcPropertySetDefinition);\n\tHasProperties : SET [1:?] OF IfcProperty;\n WHERE\n\tWR31 : EXISTS(SELF\\IfcRoot.Name);\n\tWR32 : IfcUniquePropertyName(HasProperties);\n"
      }
    },
    {
      "id": "IfcPropertySingleValue",
      "group": 1,
      "details": {
        "definition": " IfcPropertySingleValue\n SUBTYPE OF (IfcSimpleProperty);\n\tNominalValue : OPTIONAL IfcValue;\n\tUnit : OPTIONAL IfcUnit;\n"
      }
    },
    {
      "id": "IfcPropertyTableValue",
      "group": 1,
      "details": {
        "definition": " IfcPropertyTableValue\n SUBTYPE OF (IfcSimpleProperty);\n\tDefiningValues : LIST [1:?] OF UNIQUE IfcValue;\n\tDefinedValues : LIST [1:?] OF IfcValue;\n\tExpression : OPTIONAL IfcText;\n\tDefiningUnit : OPTIONAL IfcUnit;\n\tDefinedUnit : OPTIONAL IfcUnit;\n WHERE\n\tWR1 : SIZEOF(DefiningValues) = SIZEOF(DefinedValues);\n\tWR2 : SIZEOF(QUERY(temp <* SELF.DefiningValues | TYPEOF(temp) <> TYPEOF(SELF.DefiningValues[1])))=0;\n\tWR3 : SIZEOF(QUERY(temp <* SELF.DefinedValues | TYPEOF(temp) <> TYPEOF(SELF.DefinedValues[1])))=0;\n"
      }
    },
    {
      "id": "IfcProtectiveDeviceType",
      "group": 1,
      "details": {
        "definition": " IfcProtectiveDeviceType\n SUBTYPE OF (IfcFlowControllerType);\n\tPredefinedType : IfcProtectiveDeviceTypeEnum;\n"
      }
    },
    {
      "id": "IfcProtectiveDeviceTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcProxy",
      "group": 1,
      "details": {
        "definition": " IfcProxy\n SUBTYPE OF (IfcProduct);\n\tProxyType : IfcObjectTypeEnum;\n\tTag : OPTIONAL IfcLabel;\n WHERE\n\tWR1 : EXISTS(SELF\\IfcRoot.Name);\n"
      }
    },
    {
      "id": "IfcObjectTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPumpType",
      "group": 1,
      "details": {
        "definition": " IfcPumpType\n SUBTYPE OF (IfcFlowMovingDeviceType);\n\tPredefinedType : IfcPumpTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcPumpTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcPumpTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcPumpTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcQuantityArea",
      "group": 1,
      "details": {
        "definition": " IfcQuantityArea\n SUBTYPE OF (IfcPhysicalSimpleQuantity);\n\tAreaValue : IfcAreaMeasure;\n WHERE\n\tWR21 : NOT(EXISTS(SELF\\IfcPhysicalSimpleQuantity.Unit)) OR\n                (SELF\\IfcPhysicalSimpleQuantity.Unit.UnitType = IfcUnitEnum.AREAUNIT);\n\tWR22 : AreaValue >= 0.;\n"
      }
    },
    {
      "id": "IfcAreaMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcQuantityCount",
      "group": 1,
      "details": {
        "definition": " IfcQuantityCount\n SUBTYPE OF (IfcPhysicalSimpleQuantity);\n\tCountValue : IfcCountMeasure;\n WHERE\n\tWR21 : CountValue >= 0.;\n"
      }
    },
    {
      "id": "IfcCountMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcQuantityLength",
      "group": 1,
      "details": {
        "definition": " IfcQuantityLength\n SUBTYPE OF (IfcPhysicalSimpleQuantity);\n\tLengthValue : IfcLengthMeasure;\n WHERE\n\tWR21 : NOT(EXISTS(SELF\\IfcPhysicalSimpleQuantity.Unit)) OR\n                (SELF\\IfcPhysicalSimpleQuantity.Unit.UnitType = IfcUnitEnum.LENGTHUNIT);\n\tWR22 : LengthValue >= 0.;\n"
      }
    },
    {
      "id": "IfcQuantityTime",
      "group": 1,
      "details": {
        "definition": " IfcQuantityTime\n SUBTYPE OF (IfcPhysicalSimpleQuantity);\n\tTimeValue : IfcTimeMeasure;\n WHERE\n\tWR21 : NOT(EXISTS(SELF\\IfcPhysicalSimpleQuantity.Unit)) OR\n                (SELF\\IfcPhysicalSimpleQuantity.Unit.UnitType = IfcUnitEnum.TIMEUNIT);\n\tWR22 : TimeValue >= 0.;\n"
      }
    },
    {
      "id": "IfcTimeMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcQuantityVolume",
      "group": 1,
      "details": {
        "definition": " IfcQuantityVolume\n SUBTYPE OF (IfcPhysicalSimpleQuantity);\n\tVolumeValue : IfcVolumeMeasure;\n WHERE\n\tWR21 : NOT(EXISTS(SELF\\IfcPhysicalSimpleQuantity.Unit)) OR\n                (SELF\\IfcPhysicalSimpleQuantity.Unit.UnitType = IfcUnitEnum.VOLUMEUNIT);\n\tWR22 : VolumeValue >= 0.;\n"
      }
    },
    {
      "id": "IfcVolumeMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcQuantityWeight",
      "group": 1,
      "details": {
        "definition": " IfcQuantityWeight\n SUBTYPE OF (IfcPhysicalSimpleQuantity);\n\tWeightValue : IfcMassMeasure;\n WHERE\n\tWR21 : NOT(EXISTS(SELF\\IfcPhysicalSimpleQuantity.Unit)) OR\n                (SELF\\IfcPhysicalSimpleQuantity.Unit.UnitType = IfcUnitEnum.MASSUNIT);\n\tWR22 : WeightValue >= 0.;\n"
      }
    },
    {
      "id": "IfcMassMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRadiusDimension",
      "group": 1,
      "details": {
        "definition": " IfcRadiusDimension\n SUBTYPE OF (IfcDimensionCurveDirectedCallout);\n"
      }
    },
    {
      "id": "IfcRailing",
      "group": 1,
      "details": {
        "definition": " IfcRailing\n SUBTYPE OF (IfcBuildingElement);\n\tPredefinedType : OPTIONAL IfcRailingTypeEnum;\n"
      }
    },
    {
      "id": "IfcRailingType",
      "group": 1,
      "details": {
        "definition": " IfcRailingType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcRailingTypeEnum;\n"
      }
    },
    {
      "id": "IfcRailingTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRamp",
      "group": 1,
      "details": {
        "definition": " IfcRamp\n SUBTYPE OF (IfcBuildingElement);\n\tShapeType : IfcRampTypeEnum;\n WHERE\n\tWR1 : (HIINDEX(SELF\\IfcObjectDefinition.IsDecomposedBy) = 0) OR \n            ((HIINDEX(SELF\\IfcObjectDefinition.IsDecomposedBy) = 1) AND (NOT(EXISTS(SELF\\IfcProduct.Representation))));\n"
      }
    },
    {
      "id": "IfcRampTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRampFlight",
      "group": 1,
      "details": {
        "definition": " IfcRampFlight\n SUBTYPE OF (IfcBuildingElement);\n"
      }
    },
    {
      "id": "IfcRampFlightType",
      "group": 1,
      "details": {
        "definition": " IfcRampFlightType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcRampFlightTypeEnum;\n"
      }
    },
    {
      "id": "IfcRampFlightTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRationalBezierCurve",
      "group": 1,
      "details": {
        "definition": " IfcRationalBezierCurve\n SUBTYPE OF (IfcBezierCurve);\n\tWeightsData : LIST [2:?] OF REAL;\n DERIVE\n\tWeights : ARRAY [0:255] OF REAL := IfcListToArray(WeightsData,0,SELF\\IfcBSplineCurve.UpperIndexOnControlPoints);\n WHERE\n\tWR1 : SIZEOF(WeightsData) = SIZEOF(SELF\\IfcBSplineCurve.ControlPointsList);\n\tWR2 : IfcCurveWeightsPositive(SELF);\n"
      }
    },
    {
      "id": "IfcRectangleHollowProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcRectangleHollowProfileDef\n SUBTYPE OF (IfcRectangleProfileDef);\n\tWallThickness : IfcPositiveLengthMeasure;\n\tInnerFilletRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tOuterFilletRadius : OPTIONAL IfcPositiveLengthMeasure;\n WHERE\n\tWR31 : (WallThickness < (SELF\\IfcRectangleProfileDef.XDim/2.)) AND \n             (WallThickness < (SELF\\IfcRectangleProfileDef.YDim/2.));\n\tWR32 : NOT(EXISTS(OuterFilletRadius)) OR \n             ((OuterFilletRadius <= (SELF\\IfcRectangleProfileDef.XDim/2.)) AND \n              (OuterFilletRadius <= (SELF\\IfcRectangleProfileDef.YDim/2.)));\n\tWR33 : NOT(EXISTS(InnerFilletRadius)) OR \n             ((InnerFilletRadius <= (SELF\\IfcRectangleProfileDef.XDim/2. - WallThickness)) AND \n              (InnerFilletRadius <= (SELF\\IfcRectangleProfileDef.YDim/2. - WallThickness)));\n"
      }
    },
    {
      "id": "IfcRectangleProfileDef",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcRectangularPyramid",
      "group": 1,
      "details": {
        "definition": " IfcRectangularPyramid\n SUBTYPE OF (IfcCsgPrimitive3D);\n\tXLength : IfcPositiveLengthMeasure;\n\tYLength : IfcPositiveLengthMeasure;\n\tHeight : IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcRectangularTrimmedSurface",
      "group": 1,
      "details": {
        "definition": " IfcRectangularTrimmedSurface\n SUBTYPE OF (IfcBoundedSurface);\n\tBasisSurface : IfcSurface;\n\tU1 : IfcParameterValue;\n\tV1 : IfcParameterValue;\n\tU2 : IfcParameterValue;\n\tV2 : IfcParameterValue;\n\tUsense : BOOLEAN;\n\tVsense : BOOLEAN;\n DERIVE\n\tDim : IfcDimensionCount := BasisSurface.Dim;\n WHERE\n\tWR1 : U1 <> U2;\n\tWR2 : V1 <> V2;\n\tWR3 : (('IFC2X3.IFCELEMENTARYSURFACE' IN TYPEOF(BasisSurface)) AND\n                     (NOT ('IFC2X3.IFCPLANE' IN TYPEOF(BasisSurface)))) OR\n                     ('IFC2X3.IFCSURFACEOFREVOLUTION' IN TYPEOF(BasisSurface)) OR\n                     (Usense = (U2 > U1));\n\tWR4 : Vsense = (V2 > V1);\n"
      }
    },
    {
      "id": "IfcReferencesValueDocument",
      "group": 1,
      "details": {
        "definition": " IfcReferencesValueDocument;\n\tReferencedDocument : IfcDocumentSelect;\n\tReferencingValues : SET [1:?] OF IfcAppliedValue;\n\tName : OPTIONAL IfcLabel;\n\tDescription : OPTIONAL IfcText;\n"
      }
    },
    {
      "id": "IfcDocumentSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRegularTimeSeries",
      "group": 1,
      "details": {
        "definition": " IfcRegularTimeSeries\n SUBTYPE OF (IfcTimeSeries);\n\tTimeStep : IfcTimeMeasure;\n\tValues : LIST [1:?] OF IfcTimeSeriesValue;\n"
      }
    },
    {
      "id": "IfcReinforcementBarProperties",
      "group": 1,
      "details": {
        "definition": " IfcReinforcementBarProperties;\n\tTotalCrossSectionArea : IfcAreaMeasure;\n\tSteelGrade : IfcLabel;\n\tBarSurface : OPTIONAL IfcReinforcingBarSurfaceEnum;\n\tEffectiveDepth : OPTIONAL IfcLengthMeasure;\n\tNominalBarDiameter : OPTIONAL IfcPositiveLengthMeasure;\n\tBarCount : OPTIONAL IfcCountMeasure;\n"
      }
    },
    {
      "id": "IfcReinforcementDefinitionProperties",
      "group": 1,
      "details": {
        "definition": " IfcReinforcementDefinitionProperties\n SUBTYPE OF (IfcPropertySetDefinition);\n\tDefinitionType : OPTIONAL IfcLabel;\n\tReinforcementSectionDefinitions : LIST [1:?] OF IfcSectionReinforcementProperties;\n"
      }
    },
    {
      "id": "IfcReinforcingBar",
      "group": 1,
      "details": {
        "definition": " IfcReinforcingBar\n SUBTYPE OF (IfcReinforcingElement);\n\tNominalDiameter : IfcPositiveLengthMeasure;\n\tCrossSectionArea : IfcAreaMeasure;\n\tBarLength : OPTIONAL IfcPositiveLengthMeasure;\n\tBarRole : IfcReinforcingBarRoleEnum;\n\tBarSurface : OPTIONAL IfcReinforcingBarSurfaceEnum;\n WHERE\n\tWR1 : (BarRole <> IfcReinforcingBarRoleEnum.USERDEFINED) OR ((BarRole = IfcReinforcingBarRoleEnum.USERDEFINED) AND EXISTS(SELF\\IfcObject.ObjectType));\n"
      }
    },
    {
      "id": "IfcReinforcingElement",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcReinforcingBarRoleEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcReinforcingMesh",
      "group": 1,
      "details": {
        "definition": " IfcReinforcingMesh\n SUBTYPE OF (IfcReinforcingElement);\n\tMeshLength : OPTIONAL IfcPositiveLengthMeasure;\n\tMeshWidth : OPTIONAL IfcPositiveLengthMeasure;\n\tLongitudinalBarNominalDiameter : IfcPositiveLengthMeasure;\n\tTransverseBarNominalDiameter : IfcPositiveLengthMeasure;\n\tLongitudinalBarCrossSectionArea : IfcAreaMeasure;\n\tTransverseBarCrossSectionArea : IfcAreaMeasure;\n\tLongitudinalBarSpacing : IfcPositiveLengthMeasure;\n\tTransverseBarSpacing : IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcRelAggregates",
      "group": 1,
      "details": {
        "definition": " IfcRelAggregates\n SUBTYPE OF (IfcRelDecomposes);\n"
      }
    },
    {
      "id": "IfcRelDecomposes",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcRelAssigns",
      "group": 1,
      "details": {
        "definition": " IfcRelAssigns\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcRelAssignsToActor\n\t,IfcRelAssignsToControl\n\t,IfcRelAssignsToGroup\n\t,IfcRelAssignsToProcess\n\t,IfcRelAssignsToProduct\n\t,IfcRelAssignsToResource))\n SUBTYPE OF (IfcRelationship);\n\tRelatedObjects : SET [1:?] OF IfcObjectDefinition;\n\tRelatedObjectsType : OPTIONAL IfcObjectTypeEnum;\n WHERE\n\tWR1 : IfcCorrectObjectAssignment(RelatedObjectsType, RelatedObjects);\n"
      }
    },
    {
      "id": "IfcRelationship",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcRelAssignsTasks",
      "group": 1,
      "details": {
        "definition": " IfcRelAssignsTasks\n SUBTYPE OF (IfcRelAssignsToControl);\n\tTimeForTask : OPTIONAL IfcScheduleTimeControl;\n WHERE\n\tWR1 : HIINDEX(SELF\\IfcRelAssigns.RelatedObjects) = 1;\n\tWR2 : 'IFC2X3.IFCTASK' IN TYPEOF(SELF\\IfcRelAssigns.RelatedObjects[1]);\n\tWR3 : 'IFC2X3.IFCWORKCONTROL' IN TYPEOF(SELF\\IfcRelAssignsToControl.RelatingControl);\n"
      }
    },
    {
      "id": "IfcRelAssignsToControl",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcRelAssignsToActor",
      "group": 1,
      "details": {
        "definition": " IfcRelAssignsToActor\n SUPERTYPE OF (ONEOF\n\t(IfcRelOccupiesSpaces))\n SUBTYPE OF (IfcRelAssigns);\n\tRelatingActor : IfcActor;\n\tActingRole : OPTIONAL IfcActorRole;\n WHERE\n\tWR1 : SIZEOF(QUERY(Temp <* SELF\\IfcRelAssigns.RelatedObjects | RelatingActor :=: Temp)) = 0;\n"
      }
    },
    {
      "id": "IfcRelAssignsToGroup",
      "group": 1,
      "details": {
        "definition": " IfcRelAssignsToGroup\n SUBTYPE OF (IfcRelAssigns);\n\tRelatingGroup : IfcGroup;\n WHERE\n\tWR1 : SIZEOF(QUERY(Temp <* SELF\\IfcRelAssigns.RelatedObjects | RelatingGroup :=: Temp)) = 0;\n"
      }
    },
    {
      "id": "IfcRelAssignsToProcess",
      "group": 1,
      "details": {
        "definition": " IfcRelAssignsToProcess\n SUBTYPE OF (IfcRelAssigns);\n\tRelatingProcess : IfcProcess;\n\tQuantityInProcess : OPTIONAL IfcMeasureWithUnit;\n WHERE\n\tWR1 : SIZEOF(QUERY(Temp <* SELF\\IfcRelAssigns.RelatedObjects | RelatingProcess :=: Temp)) = 0;\n"
      }
    },
    {
      "id": "IfcRelAssignsToProduct",
      "group": 1,
      "details": {
        "definition": " IfcRelAssignsToProduct\n SUBTYPE OF (IfcRelAssigns);\n\tRelatingProduct : IfcProduct;\n WHERE\n\tWR1 : SIZEOF(QUERY(Temp <* SELF\\IfcRelAssigns.RelatedObjects | RelatingProduct :=: Temp)) = 0;\n"
      }
    },
    {
      "id": "IfcRelAssignsToProjectOrder",
      "group": 1,
      "details": {
        "definition": " IfcRelAssignsToProjectOrder\n SUBTYPE OF (IfcRelAssignsToControl);\n"
      }
    },
    {
      "id": "IfcRelAssignsToResource",
      "group": 1,
      "details": {
        "definition": " IfcRelAssignsToResource\n SUBTYPE OF (IfcRelAssigns);\n\tRelatingResource : IfcResource;\n WHERE\n\tWR1 : SIZEOF(QUERY(Temp <* SELF\\IfcRelAssigns.RelatedObjects | RelatingResource :=: Temp)) = 0;\n"
      }
    },
    {
      "id": "IfcRelAssociates",
      "group": 1,
      "details": {
        "definition": " IfcRelAssociates\n SUPERTYPE OF (ONEOF\n\t(IfcRelAssociatesAppliedValue\n\t,IfcRelAssociatesApproval\n\t,IfcRelAssociatesClassification\n\t,IfcRelAssociatesConstraint\n\t,IfcRelAssociatesDocument\n\t,IfcRelAssociatesLibrary\n\t,IfcRelAssociatesMaterial\n\t,IfcRelAssociatesProfileProperties))\n SUBTYPE OF (IfcRelationship);\n\tRelatedObjects : SET [1:?] OF IfcRoot;\n WHERE\n\tWR21 : SIZEOF(QUERY(temp <* RelatedObjects |\n              NOT(('IFC2X3.IFCOBJECTDEFINITION' IN TYPEOF(temp)) \n               OR ('IFC2X3.IFCPROPERTYDEFINITION' IN TYPEOF(temp)))\n              )) = 0;\n"
      }
    },
    {
      "id": "IfcRelAssociatesAppliedValue",
      "group": 1,
      "details": {
        "definition": " IfcRelAssociatesAppliedValue\n SUBTYPE OF (IfcRelAssociates);\n\tRelatingAppliedValue : IfcAppliedValue;\n"
      }
    },
    {
      "id": "IfcRelAssociatesApproval",
      "group": 1,
      "details": {
        "definition": " IfcRelAssociatesApproval\n SUBTYPE OF (IfcRelAssociates);\n\tRelatingApproval : IfcApproval;\n"
      }
    },
    {
      "id": "IfcRelAssociatesClassification",
      "group": 1,
      "details": {
        "definition": " IfcRelAssociatesClassification\n SUBTYPE OF (IfcRelAssociates);\n\tRelatingClassification : IfcClassificationNotationSelect;\n"
      }
    },
    {
      "id": "IfcClassificationNotationSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelAssociatesConstraint",
      "group": 1,
      "details": {
        "definition": " IfcRelAssociatesConstraint\n SUBTYPE OF (IfcRelAssociates);\n\tIntent : IfcLabel;\n\tRelatingConstraint : IfcConstraint;\n"
      }
    },
    {
      "id": "IfcRelAssociatesDocument",
      "group": 1,
      "details": {
        "definition": " IfcRelAssociatesDocument\n SUBTYPE OF (IfcRelAssociates);\n\tRelatingDocument : IfcDocumentSelect;\n"
      }
    },
    {
      "id": "IfcRelAssociatesLibrary",
      "group": 1,
      "details": {
        "definition": " IfcRelAssociatesLibrary\n SUBTYPE OF (IfcRelAssociates);\n\tRelatingLibrary : IfcLibrarySelect;\n"
      }
    },
    {
      "id": "IfcLibrarySelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelAssociatesMaterial",
      "group": 1,
      "details": {
        "definition": " IfcRelAssociatesMaterial\n SUBTYPE OF (IfcRelAssociates);\n\tRelatingMaterial : IfcMaterialSelect;\n WHERE\n\tWR21 : SIZEOF(QUERY(temp <* SELF\\IfcRelAssociates.RelatedObjects | \n             ('IFC2X3.IFCFEATUREELEMENTSUBTRACTION' IN TYPEOF(temp))\n               OR ('IFC2X3.IFCVIRTUALELEMENT' IN TYPEOF(temp))\n             )) = 0;\n\tWR22 : SIZEOF(QUERY(temp <* SELF\\IfcRelAssociates.RelatedObjects | \n             (NOT('IFC2X3.IFCPRODUCT' IN TYPEOF(temp)) AND NOT('IFC2X3.IFCTYPEPRODUCT' IN TYPEOF(temp)))\n             )) = 0;\n"
      }
    },
    {
      "id": "IfcMaterialSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelAssociatesProfileProperties",
      "group": 1,
      "details": {
        "definition": " IfcRelAssociatesProfileProperties\n SUBTYPE OF (IfcRelAssociates);\n\tRelatingProfileProperties : IfcProfileProperties;\n\tProfileSectionLocation : OPTIONAL IfcShapeAspect;\n\tProfileOrientation : OPTIONAL IfcOrientationSelect;\n"
      }
    },
    {
      "id": "IfcRelConnects",
      "group": 1,
      "details": {
        "definition": " IfcRelConnects\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcRelConnectsElements\n\t,IfcRelConnectsPortToElement\n\t,IfcRelConnectsPorts\n\t,IfcRelConnectsStructuralActivity\n\t,IfcRelConnectsStructuralElement\n\t,IfcRelConnectsStructuralMember\n\t,IfcRelContainedInSpatialStructure\n\t,IfcRelCoversBldgElements\n\t,IfcRelCoversSpaces\n\t,IfcRelFillsElement\n\t,IfcRelFlowControlElements\n\t,IfcRelInteractionRequirements\n\t,IfcRelProjectsElement\n\t,IfcRelReferencedInSpatialStructure\n\t,IfcRelSequence\n\t,IfcRelServicesBuildings\n\t,IfcRelSpaceBoundary\n\t,IfcRelVoidsElement))\n SUBTYPE OF (IfcRelationship);\n"
      }
    },
    {
      "id": "IfcRelConnectsElements",
      "group": 1,
      "details": {
        "definition": " IfcRelConnectsElements\n SUPERTYPE OF (ONEOF\n\t(IfcRelConnectsPathElements\n\t,IfcRelConnectsWithRealizingElements))\n SUBTYPE OF (IfcRelConnects);\n\tConnectionGeometry : OPTIONAL IfcConnectionGeometry;\n\tRelatingElement : IfcElement;\n\tRelatedElement : IfcElement;\n WHERE\n\tWR31 : RelatingElement :<>: RelatedElement;\n"
      }
    },
    {
      "id": "IfcRelConnectsPathElements",
      "group": 1,
      "details": {
        "definition": " IfcRelConnectsPathElements\n SUBTYPE OF (IfcRelConnectsElements);\n\tRelatingPriorities : LIST [0:?] OF INTEGER;\n\tRelatedPriorities : LIST [0:?] OF INTEGER;\n\tRelatedConnectionType : IfcConnectionTypeEnum;\n\tRelatingConnectionType : IfcConnectionTypeEnum;\n DERIVE\n\tRelatedLayerCount : INTEGER := IfcNoOfLayers(SELF\\IfcRelConnectsElements.RelatedElement);\n\tRelatingLayerCount : INTEGER := IfcNoOfLayers(SELF\\IfcRelConnectsElements.RelatingElement);\n"
      }
    },
    {
      "id": "IfcConnectionTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelConnectsPortToElement",
      "group": 1,
      "details": {
        "definition": " IfcRelConnectsPortToElement\n SUBTYPE OF (IfcRelConnects);\n\tRelatingPort : IfcPort;\n\tRelatedElement : IfcElement;\n"
      }
    },
    {
      "id": "IfcRelConnectsPorts",
      "group": 1,
      "details": {
        "definition": " IfcRelConnectsPorts\n SUBTYPE OF (IfcRelConnects);\n\tRelatingPort : IfcPort;\n\tRelatedPort : IfcPort;\n\tRealizingElement : OPTIONAL IfcElement;\n"
      }
    },
    {
      "id": "IfcRelConnectsStructuralActivity",
      "group": 1,
      "details": {
        "definition": " IfcRelConnectsStructuralActivity\n SUBTYPE OF (IfcRelConnects);\n\tRelatingElement : IfcStructuralActivityAssignmentSelect;\n\tRelatedStructuralActivity : IfcStructuralActivity;\n"
      }
    },
    {
      "id": "IfcStructuralActivityAssignmentSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStructuralActivity",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelConnectsStructuralElement",
      "group": 1,
      "details": {
        "definition": " IfcRelConnectsStructuralElement\n SUBTYPE OF (IfcRelConnects);\n\tRelatingElement : IfcElement;\n\tRelatedStructuralMember : IfcStructuralMember;\n"
      }
    },
    {
      "id": "IfcStructuralMember",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelConnectsStructuralMember",
      "group": 1,
      "details": {
        "definition": " IfcRelConnectsStructuralMember\n SUPERTYPE OF (ONEOF\n\t(IfcRelConnectsWithEccentricity))\n SUBTYPE OF (IfcRelConnects);\n\tRelatingStructuralMember : IfcStructuralMember;\n\tRelatedStructuralConnection : IfcStructuralConnection;\n\tAppliedCondition : OPTIONAL IfcBoundaryCondition;\n\tAdditionalConditions : OPTIONAL IfcStructuralConnectionCondition;\n\tSupportedLength : OPTIONAL IfcLengthMeasure;\n\tConditionCoordinateSystem : OPTIONAL IfcAxis2Placement3D;\n"
      }
    },
    {
      "id": "IfcStructuralConnection",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelConnectsWithEccentricity",
      "group": 1,
      "details": {
        "definition": " IfcRelConnectsWithEccentricity\n SUBTYPE OF (IfcRelConnectsStructuralMember);\n\tConnectionConstraint : IfcConnectionGeometry;\n"
      }
    },
    {
      "id": "IfcRelConnectsWithRealizingElements",
      "group": 1,
      "details": {
        "definition": " IfcRelConnectsWithRealizingElements\n SUBTYPE OF (IfcRelConnectsElements);\n\tRealizingElements : SET [1:?] OF IfcElement;\n\tConnectionType : OPTIONAL IfcLabel;\n"
      }
    },
    {
      "id": "IfcRelContainedInSpatialStructure",
      "group": 1,
      "details": {
        "definition": " IfcRelContainedInSpatialStructure\n SUBTYPE OF (IfcRelConnects);\n\tRelatedElements : SET [1:?] OF IfcProduct;\n\tRelatingStructure : IfcSpatialStructureElement;\n WHERE\n\tWR31 : SIZEOF(QUERY(temp <* RelatedElements | 'IFC2X3.IFCSPATIALSTRUCTUREELEMENT' IN TYPEOF(temp))) = 0;\n"
      }
    },
    {
      "id": "IfcRelCoversBldgElements",
      "group": 1,
      "details": {
        "definition": " IfcRelCoversBldgElements\n SUBTYPE OF (IfcRelConnects);\n\tRelatingBuildingElement : IfcElement;\n\tRelatedCoverings : SET [1:?] OF IfcCovering;\n"
      }
    },
    {
      "id": "IfcRelCoversSpaces",
      "group": 1,
      "details": {
        "definition": " IfcRelCoversSpaces\n SUBTYPE OF (IfcRelConnects);\n\tRelatedSpace : IfcSpace;\n\tRelatedCoverings : SET [1:?] OF IfcCovering;\n"
      }
    },
    {
      "id": "IfcSpace",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelDefines",
      "group": 1,
      "details": {
        "definition": " IfcRelDefines\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcRelDefinesByProperties\n\t,IfcRelDefinesByType))\n SUBTYPE OF (IfcRelationship);\n\tRelatedObjects : SET [1:?] OF IfcObject;\n"
      }
    },
    {
      "id": "IfcRelDefinesByProperties",
      "group": 1,
      "details": {
        "definition": " IfcRelDefinesByProperties\n SUPERTYPE OF (ONEOF\n\t(IfcRelOverridesProperties))\n SUBTYPE OF (IfcRelDefines);\n\tRelatingPropertyDefinition : IfcPropertySetDefinition;\n"
      }
    },
    {
      "id": "IfcRelDefinesByType",
      "group": 1,
      "details": {
        "definition": " IfcRelDefinesByType\n SUBTYPE OF (IfcRelDefines);\n\tRelatingType : IfcTypeObject;\n"
      }
    },
    {
      "id": "IfcTypeObject",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelFillsElement",
      "group": 1,
      "details": {
        "definition": " IfcRelFillsElement\n SUBTYPE OF (IfcRelConnects);\n\tRelatingOpeningElement : IfcOpeningElement;\n\tRelatedBuildingElement : IfcElement;\n"
      }
    },
    {
      "id": "IfcRelFlowControlElements",
      "group": 1,
      "details": {
        "definition": " IfcRelFlowControlElements\n SUBTYPE OF (IfcRelConnects);\n\tRelatedControlElements : SET [1:?] OF IfcDistributionControlElement;\n\tRelatingFlowElement : IfcDistributionFlowElement;\n"
      }
    },
    {
      "id": "IfcRelInteractionRequirements",
      "group": 1,
      "details": {
        "definition": " IfcRelInteractionRequirements\n SUBTYPE OF (IfcRelConnects);\n\tDailyInteraction : OPTIONAL IfcCountMeasure;\n\tImportanceRating : OPTIONAL IfcNormalisedRatioMeasure;\n\tLocationOfInteraction : OPTIONAL IfcSpatialStructureElement;\n\tRelatedSpaceProgram : IfcSpaceProgram;\n\tRelatingSpaceProgram : IfcSpaceProgram;\n"
      }
    },
    {
      "id": "IfcSpaceProgram",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelNests",
      "group": 1,
      "details": {
        "definition": " IfcRelNests\n SUBTYPE OF (IfcRelDecomposes);\n WHERE\n\tWR1 : SIZEOF(QUERY(Temp <* SELF\\IfcRelDecomposes.RelatedObjects | \n              NOT(TYPEOF(SELF\\IfcRelDecomposes.RelatingObject) = TYPEOF(Temp)))) = 0;\n"
      }
    },
    {
      "id": "IfcRelOccupiesSpaces",
      "group": 1,
      "details": {
        "definition": " IfcRelOccupiesSpaces\n SUBTYPE OF (IfcRelAssignsToActor);\n"
      }
    },
    {
      "id": "IfcRelOverridesProperties",
      "group": 1,
      "details": {
        "definition": " IfcRelOverridesProperties\n SUBTYPE OF (IfcRelDefinesByProperties);\n\tOverridingProperties : SET [1:?] OF IfcProperty;\n WHERE\n\tWR1 : SIZEOF(SELF\\IfcRelDefines.RelatedObjects) = 1;\n"
      }
    },
    {
      "id": "IfcRelProjectsElement",
      "group": 1,
      "details": {
        "definition": " IfcRelProjectsElement\n SUBTYPE OF (IfcRelConnects);\n\tRelatingElement : IfcElement;\n\tRelatedFeatureElement : IfcFeatureElementAddition;\n"
      }
    },
    {
      "id": "IfcRelReferencedInSpatialStructure",
      "group": 1,
      "details": {
        "definition": " IfcRelReferencedInSpatialStructure\n SUBTYPE OF (IfcRelConnects);\n\tRelatedElements : SET [1:?] OF IfcProduct;\n\tRelatingStructure : IfcSpatialStructureElement;\n WHERE\n\tWR31 : SIZEOF(QUERY(temp <* RelatedElements | 'IFC2X3.IFCSPATIALSTRUCTUREELEMENT' IN TYPEOF(temp))) = 0;\n"
      }
    },
    {
      "id": "IfcRelSchedulesCostItems",
      "group": 1,
      "details": {
        "definition": " IfcRelSchedulesCostItems\n SUBTYPE OF (IfcRelAssignsToControl);\n WHERE\n\tWR11 : SIZEOF(QUERY(temp <* SELF\\IfcRelAssigns.RelatedObjects |\n               NOT('IFC2X3.IFCCOSTITEM' IN TYPEOF(temp))\n               )) = 0;\n\tWR12 : 'IFC2X3.IFCCOSTSCHEDULE' IN TYPEOF (SELF\\IfcRelAssignsToControl.RelatingControl);\n"
      }
    },
    {
      "id": "IfcRelSequence",
      "group": 1,
      "details": {
        "definition": " IfcRelSequence\n SUBTYPE OF (IfcRelConnects);\n\tRelatingProcess : IfcProcess;\n\tRelatedProcess : IfcProcess;\n\tTimeLag : IfcTimeMeasure;\n\tSequenceType : IfcSequenceEnum;\n WHERE\n\tWR1 : RelatingProcess :<>: RelatedProcess;\n"
      }
    },
    {
      "id": "IfcSequenceEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelServicesBuildings",
      "group": 1,
      "details": {
        "definition": " IfcRelServicesBuildings\n SUBTYPE OF (IfcRelConnects);\n\tRelatingSystem : IfcSystem;\n\tRelatedBuildings : SET [1:?] OF IfcSpatialStructureElement;\n"
      }
    },
    {
      "id": "IfcRelSpaceBoundary",
      "group": 1,
      "details": {
        "definition": " IfcRelSpaceBoundary\n SUBTYPE OF (IfcRelConnects);\n\tRelatingSpace : IfcSpace;\n\tRelatedBuildingElement : OPTIONAL IfcElement;\n\tConnectionGeometry : OPTIONAL IfcConnectionGeometry;\n\tPhysicalOrVirtualBoundary : IfcPhysicalOrVirtualEnum;\n\tInternalOrExternalBoundary : IfcInternalOrExternalEnum;\n WHERE\n\tWR1 : ((PhysicalOrVirtualBoundary = IfcPhysicalOrVirtualEnum.Physical) AND \n              (EXISTS(RelatedBuildingElement) AND NOT('IFC2X3.IFCVIRTUALELEMENT' IN TYPEOF(RelatedBuildingElement)))) \n            OR \n            ((PhysicalOrVirtualBoundary = IfcPhysicalOrVirtualEnum.Virtual) AND \n              (NOT(EXISTS(RelatedBuildingElement)) OR ('IFC2X3.IFCVIRTUALELEMENT' IN TYPEOF(RelatedBuildingElement)))) \n            OR \n             (PhysicalOrVirtualBoundary = IfcPhysicalOrVirtualEnum.NotDefined);\n"
      }
    },
    {
      "id": "IfcPhysicalOrVirtualEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcInternalOrExternalEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRelVoidsElement",
      "group": 1,
      "details": {
        "definition": " IfcRelVoidsElement\n SUBTYPE OF (IfcRelConnects);\n\tRelatingBuildingElement : IfcElement;\n\tRelatedOpeningElement : IfcFeatureElementSubtraction;\n"
      }
    },
    {
      "id": "IfcRelaxation",
      "group": 1,
      "details": {
        "definition": " IfcRelaxation;\n\tRelaxationValue : IfcNormalisedRatioMeasure;\n\tInitialStress : IfcNormalisedRatioMeasure;\n"
      }
    },
    {
      "id": "IfcRepresentation",
      "group": 1,
      "details": {
        "definition": " IfcRepresentation\n SUPERTYPE OF (ONEOF\n\t(IfcShapeModel\n\t,IfcStyleModel));\n\tContextOfItems : IfcRepresentationContext;\n\tRepresentationIdentifier : OPTIONAL IfcLabel;\n\tRepresentationType : OPTIONAL IfcLabel;\n\tItems : SET [1:?] OF IfcRepresentationItem;\n INVERSE\n\tRepresentationMap : SET [0:1] OF IfcRepresentationMap FOR MappedRepresentation;\n\tLayerAssignments : SET [0:?] OF IfcPresentationLayerAssignment FOR Assigneditems;\n\tOfProductRepresentation : SET [0:1] OF IfcProductRepresentation FOR Representations;\n"
      }
    },
    {
      "id": "IfcRevolvedAreaSolid",
      "group": 1,
      "details": {
        "definition": " IfcRevolvedAreaSolid\n SUBTYPE OF (IfcSweptAreaSolid);\n\tAxis : IfcAxis1Placement;\n\tAngle : IfcPlaneAngleMeasure;\n DERIVE\n\tAxisLine : IfcLine := IfcRepresentationItem() || IfcGeometricRepresentationItem () || IfcCurve() || IfcLine(Axis.Location, \n                   IfcRepresentationItem() || IfcGeometricRepresentationItem () || IfcVector(Axis.Z,1.0));\n WHERE\n\tWR31 : Axis.Location.Coordinates[3] = 0.0;\n\tWR32 : Axis.Z.DirectionRatios[3] = 0.0;\n"
      }
    },
    {
      "id": "IfcRibPlateProfileProperties",
      "group": 1,
      "details": {
        "definition": " IfcRibPlateProfileProperties\n SUBTYPE OF (IfcProfileProperties);\n\tThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tRibHeight : OPTIONAL IfcPositiveLengthMeasure;\n\tRibWidth : OPTIONAL IfcPositiveLengthMeasure;\n\tRibSpacing : OPTIONAL IfcPositiveLengthMeasure;\n\tDirection : IfcRibPlateDirectionEnum;\n"
      }
    },
    {
      "id": "IfcRibPlateDirectionEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRightCircularCone",
      "group": 1,
      "details": {
        "definition": " IfcRightCircularCone\n SUBTYPE OF (IfcCsgPrimitive3D);\n\tHeight : IfcPositiveLengthMeasure;\n\tBottomRadius : IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcRightCircularCylinder",
      "group": 1,
      "details": {
        "definition": " IfcRightCircularCylinder\n SUBTYPE OF (IfcCsgPrimitive3D);\n\tHeight : IfcPositiveLengthMeasure;\n\tRadius : IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcRoof",
      "group": 1,
      "details": {
        "definition": " IfcRoof\n SUBTYPE OF (IfcBuildingElement);\n\tShapeType : IfcRoofTypeEnum;\n WHERE\n\tWR1 : (HIINDEX(SELF\\IfcObjectDefinition.IsDecomposedBy) = 0) OR \n            ((HIINDEX(SELF\\IfcObjectDefinition.IsDecomposedBy) = 1) AND (NOT(EXISTS(SELF\\IfcProduct.Representation))));\n"
      }
    },
    {
      "id": "IfcRoofTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcGloballyUniqueId",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcRoundedEdgeFeature",
      "group": 1,
      "details": {
        "definition": " IfcRoundedEdgeFeature\n SUBTYPE OF (IfcEdgeFeature);\n\tRadius : OPTIONAL IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcRoundedRectangleProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcRoundedRectangleProfileDef\n SUBTYPE OF (IfcRectangleProfileDef);\n\tRoundingRadius : IfcPositiveLengthMeasure;\n WHERE\n\tWR31 : ((RoundingRadius <= (SELF\\IfcRectangleProfileDef.XDim/2.)) AND \n              (RoundingRadius <= (SELF\\IfcRectangleProfileDef.YDim/2.)));\n"
      }
    },
    {
      "id": "IfcSIUnit",
      "group": 1,
      "details": {
        "definition": " IfcSIUnit\n SUBTYPE OF (IfcNamedUnit);\n\tPrefix : OPTIONAL IfcSIPrefix;\n\tName : IfcSIUnitName;\n DERIVE\n\tSELF\\IfcNamedUnit.Dimensions : IfcDimensionalExponents := IfcDimensionsForSiUnit (SELF.Name);\n"
      }
    },
    {
      "id": "IfcSIUnitName",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSanitaryTerminalType",
      "group": 1,
      "details": {
        "definition": " IfcSanitaryTerminalType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcSanitaryTerminalTypeEnum;\n"
      }
    },
    {
      "id": "IfcSanitaryTerminalTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcScheduleTimeControl",
      "group": 1,
      "details": {
        "definition": " IfcScheduleTimeControl\n SUBTYPE OF (IfcControl);\n\tActualStart : OPTIONAL IfcDateTimeSelect;\n\tEarlyStart : OPTIONAL IfcDateTimeSelect;\n\tLateStart : OPTIONAL IfcDateTimeSelect;\n\tScheduleStart : OPTIONAL IfcDateTimeSelect;\n\tActualFinish : OPTIONAL IfcDateTimeSelect;\n\tEarlyFinish : OPTIONAL IfcDateTimeSelect;\n\tLateFinish : OPTIONAL IfcDateTimeSelect;\n\tScheduleFinish : OPTIONAL IfcDateTimeSelect;\n\tScheduleDuration : OPTIONAL IfcTimeMeasure;\n\tActualDuration : OPTIONAL IfcTimeMeasure;\n\tRemainingTime : OPTIONAL IfcTimeMeasure;\n\tFreeFloat : OPTIONAL IfcTimeMeasure;\n\tTotalFloat : OPTIONAL IfcTimeMeasure;\n\tIsCritical : OPTIONAL BOOLEAN;\n\tStatusTime : OPTIONAL IfcDateTimeSelect;\n\tStartFloat : OPTIONAL IfcTimeMeasure;\n\tFinishFloat : OPTIONAL IfcTimeMeasure;\n\tCompletion : OPTIONAL IfcPositiveRatioMeasure;\n INVERSE\n\tScheduleTimeControlAssigned : IfcRelAssignsTasks FOR TimeForTask;\n"
      }
    },
    {
      "id": "IfcSectionProperties",
      "group": 1,
      "details": {
        "definition": " IfcSectionProperties;\n\tSectionType : IfcSectionTypeEnum;\n\tStartProfile : IfcProfileDef;\n\tEndProfile : OPTIONAL IfcProfileDef;\n"
      }
    },
    {
      "id": "IfcSectionTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSectionReinforcementProperties",
      "group": 1,
      "details": {
        "definition": " IfcSectionReinforcementProperties;\n\tLongitudinalStartPosition : IfcLengthMeasure;\n\tLongitudinalEndPosition : IfcLengthMeasure;\n\tTransversePosition : OPTIONAL IfcLengthMeasure;\n\tReinforcementRole : IfcReinforcingBarRoleEnum;\n\tSectionDefinition : IfcSectionProperties;\n\tCrossSectionReinforcementDefinitions : SET [1:?] OF IfcReinforcementBarProperties;\n"
      }
    },
    {
      "id": "IfcSectionedSpine",
      "group": 1,
      "details": {
        "definition": " IfcSectionedSpine\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tSpineCurve : IfcCompositeCurve;\n\tCrossSections : LIST [2:?] OF IfcProfileDef;\n\tCrossSectionPositions : LIST [2:?] OF IfcAxis2Placement3D;\n DERIVE\n\tDim : IfcDimensionCount := 3;\n WHERE\n\tWR1 : SIZEOF(CrossSections) = SIZEOF(CrossSectionPositions);\n\tWR2 : SIZEOF(QUERY(temp <* CrossSections | CrossSections[1].ProfileType <> temp.ProfileType)) = 0;\n\tWR3 : SpineCurve.Dim = 3;\n"
      }
    },
    {
      "id": "IfcSensorType",
      "group": 1,
      "details": {
        "definition": " IfcSensorType\n SUBTYPE OF (IfcDistributionControlElementType);\n\tPredefinedType : IfcSensorTypeEnum;\n"
      }
    },
    {
      "id": "IfcSensorTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcServiceLife",
      "group": 1,
      "details": {
        "definition": " IfcServiceLife\n SUBTYPE OF (IfcControl);\n\tServiceLifeType : IfcServiceLifeTypeEnum;\n\tServiceLifeDuration : IfcTimeMeasure;\n"
      }
    },
    {
      "id": "IfcServiceLifeTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcServiceLifeFactor",
      "group": 1,
      "details": {
        "definition": " IfcServiceLifeFactor\n SUBTYPE OF (IfcPropertySetDefinition);\n\tPredefinedType : IfcServiceLifeFactorTypeEnum;\n\tUpperValue : OPTIONAL IfcMeasureValue;\n\tMostUsedValue : IfcMeasureValue;\n\tLowerValue : OPTIONAL IfcMeasureValue;\n WHERE\n\tWR31 : NOT(PredefinedType = IfcServiceLifeFactorTypeEnum.USERDEFINED)\n             OR EXISTS(SELF\\IfcObject.ObjectType);\n"
      }
    },
    {
      "id": "IfcServiceLifeFactorTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcMeasureValue",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcShapeAspect",
      "group": 1,
      "details": {
        "definition": " IfcShapeAspect;\n\tShapeRepresentations : LIST [1:?] OF IfcShapeModel;\n\tName : OPTIONAL IfcLabel;\n\tDescription : OPTIONAL IfcText;\n\tProductDefinitional : LOGICAL;\n\tPartOfProductDefinitionShape : IfcProductDefinitionShape;\n"
      }
    },
    {
      "id": "IfcShapeModel",
      "group": 1,
      "details": {
        "definition": " IfcShapeModel\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcShapeRepresentation\n\t,IfcTopologyRepresentation))\n SUBTYPE OF (IfcRepresentation);\n INVERSE\n\tOfShapeAspect : SET [0:1] OF IfcShapeAspect FOR ShapeRepresentations;\n WHERE\n\tWR11 : (SIZEOF(SELF\\IfcRepresentation.OfProductRepresentation) = 1) XOR \n             (SIZEOF(SELF\\IfcRepresentation.RepresentationMap) = 1) XOR\n             (SIZEOF(OfShapeAspect) = 1);\n"
      }
    },
    {
      "id": "IfcShapeRepresentation",
      "group": 1,
      "details": {
        "definition": " IfcShapeRepresentation\n SUBTYPE OF (IfcShapeModel);\n WHERE\n\tWR21 : 'IFC2X3.IFCGEOMETRICREPRESENTATIONCONTEXT' \n             IN TYPEOF(SELF\\IfcRepresentation.ContextOfItems);\n\tWR22 : SIZEOF(QUERY(temp <* Items | \n               ('IFC2X3.IFCTOPOLOGICALREPRESENTATIONITEM' IN TYPEOF(temp))\n                 AND (NOT(SIZEOF(\n                   ['IFC2X3.IFCVERTEXPOINT',\n                    'IFC2X3.IFCEDGECURVE',\n                    'IFC2X3.IFCFACESURFACE'] * TYPEOF(temp)) = 1))\n             )) = 0;\n\tWR23 : EXISTS(SELF\\IfcRepresentation.RepresentationType);\n\tWR24 : IfcShapeRepresentationTypes(SELF\\IfcRepresentation.RepresentationType, SELF\\IfcRepresentation.Items);\n"
      }
    },
    {
      "id": "IfcShellBasedSurfaceModel",
      "group": 1,
      "details": {
        "definition": " IfcShellBasedSurfaceModel\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tSbsmBoundary : SET [1:?] OF IfcShell;\n DERIVE\n\tDim : IfcDimensionCount := 3;\n"
      }
    },
    {
      "id": "IfcSite",
      "group": 1,
      "details": {
        "definition": " IfcSite\n SUBTYPE OF (IfcSpatialStructureElement);\n\tRefLatitude : OPTIONAL IfcCompoundPlaneAngleMeasure;\n\tRefLongitude : OPTIONAL IfcCompoundPlaneAngleMeasure;\n\tRefElevation : OPTIONAL IfcLengthMeasure;\n\tLandTitleNumber : OPTIONAL IfcLabel;\n\tSiteAddress : OPTIONAL IfcPostalAddress;\n"
      }
    },
    {
      "id": "IfcSlab",
      "group": 1,
      "details": {
        "definition": " IfcSlab\n SUBTYPE OF (IfcBuildingElement);\n\tPredefinedType : OPTIONAL IfcSlabTypeEnum;\n WHERE\n\tWR2 : (PredefinedType <> IfcSlabTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcSlabTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcObject.ObjectType));\n"
      }
    },
    {
      "id": "IfcSlabType",
      "group": 1,
      "details": {
        "definition": " IfcSlabType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcSlabTypeEnum;\n"
      }
    },
    {
      "id": "IfcSlabTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSlippageConnectionCondition",
      "group": 1,
      "details": {
        "definition": " IfcSlippageConnectionCondition\n SUBTYPE OF (IfcStructuralConnectionCondition);\n\tSlippageX : OPTIONAL IfcLengthMeasure;\n\tSlippageY : OPTIONAL IfcLengthMeasure;\n\tSlippageZ : OPTIONAL IfcLengthMeasure;\n"
      }
    },
    {
      "id": "IfcSoundProperties",
      "group": 1,
      "details": {
        "definition": " IfcSoundProperties\n SUBTYPE OF (IfcPropertySetDefinition);\n\tIsAttenuating : IfcBoolean;\n\tSoundScale : OPTIONAL IfcSoundScaleEnum;\n\tSoundValues : LIST [1:8] OF IfcSoundValue;\n"
      }
    },
    {
      "id": "IfcSoundValue",
      "group": 1,
      "details": {
        "definition": " IfcSoundValue\n SUBTYPE OF (IfcPropertySetDefinition);\n\tSoundLevelTimeSeries : OPTIONAL IfcTimeSeries;\n\tFrequency : IfcFrequencyMeasure;\n\tSoundLevelSingleValue : OPTIONAL IfcDerivedMeasureValue;\n"
      }
    },
    {
      "id": "IfcSpaceHeaterType",
      "group": 1,
      "details": {
        "definition": " IfcSpaceHeaterType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcSpaceHeaterTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcSpaceHeaterTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcSpaceHeaterTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcSpaceHeaterTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSpaceThermalLoadProperties",
      "group": 1,
      "details": {
        "definition": " IfcSpaceThermalLoadProperties\n SUBTYPE OF (IfcPropertySetDefinition);\n\tApplicableValueRatio : OPTIONAL IfcPositiveRatioMeasure;\n\tThermalLoadSource : IfcThermalLoadSourceEnum;\n\tPropertySource : IfcPropertySourceEnum;\n\tSourceDescription : OPTIONAL IfcText;\n\tMaximumValue : IfcPowerMeasure;\n\tMinimumValue : OPTIONAL IfcPowerMeasure;\n\tThermalLoadTimeSeriesValues : OPTIONAL IfcTimeSeries;\n\tUserDefinedThermalLoadSource : OPTIONAL IfcLabel;\n\tUserDefinedPropertySource : OPTIONAL IfcLabel;\n\tThermalLoadType : IfcThermalLoadTypeEnum;\n"
      }
    },
    {
      "id": "IfcThermalLoadSourceEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcPowerMeasure",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcThermalLoadTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSpaceType",
      "group": 1,
      "details": {
        "definition": " IfcSpaceType\n SUBTYPE OF (IfcSpatialStructureElementType);\n\tPredefinedType : IfcSpaceTypeEnum;\n"
      }
    },
    {
      "id": "IfcSpatialStructureElementType",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcSpaceTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcElementCompositionEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSphere",
      "group": 1,
      "details": {
        "definition": " IfcSphere\n SUBTYPE OF (IfcCsgPrimitive3D);\n\tRadius : IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcStackTerminalType",
      "group": 1,
      "details": {
        "definition": " IfcStackTerminalType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcStackTerminalTypeEnum;\n"
      }
    },
    {
      "id": "IfcStackTerminalTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStair",
      "group": 1,
      "details": {
        "definition": " IfcStair\n SUBTYPE OF (IfcBuildingElement);\n\tShapeType : IfcStairTypeEnum;\n WHERE\n\tWR1 : (HIINDEX(SELF\\IfcObjectDefinition.IsDecomposedBy) = 0) OR \n            ((HIINDEX(SELF\\IfcObjectDefinition.IsDecomposedBy) = 1) AND (NOT(EXISTS(SELF\\IfcProduct.Representation))));\n"
      }
    },
    {
      "id": "IfcStairTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStairFlight",
      "group": 1,
      "details": {
        "definition": " IfcStairFlight\n SUBTYPE OF (IfcBuildingElement);\n\tNumberOfRiser : OPTIONAL INTEGER;\n\tNumberOfTreads : OPTIONAL INTEGER;\n\tRiserHeight : OPTIONAL IfcPositiveLengthMeasure;\n\tTreadLength : OPTIONAL IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcStairFlightType",
      "group": 1,
      "details": {
        "definition": " IfcStairFlightType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcStairFlightTypeEnum;\n"
      }
    },
    {
      "id": "IfcStairFlightTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStructuralAction",
      "group": 1,
      "details": {
        "definition": " IfcStructuralAction\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcStructuralLinearAction\n\t,IfcStructuralPlanarAction\n\t,IfcStructuralPointAction))\n SUBTYPE OF (IfcStructuralActivity);\n\tDestabilizingLoad : BOOLEAN;\n\tCausedBy : OPTIONAL IfcStructuralReaction;\n"
      }
    },
    {
      "id": "IfcStructuralLoad",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcGlobalOrLocalEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStructuralAnalysisModel",
      "group": 1,
      "details": {
        "definition": " IfcStructuralAnalysisModel\n SUBTYPE OF (IfcSystem);\n\tPredefinedType : IfcAnalysisModelTypeEnum;\n\tOrientationOf2DPlane : OPTIONAL IfcAxis2Placement3D;\n\tLoadedBy : OPTIONAL SET [1:?] OF IfcStructuralLoadGroup;\n\tHasResults : OPTIONAL SET [1:?] OF IfcStructuralResultGroup;\n"
      }
    },
    {
      "id": "IfcAnalysisModelTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStructuralItem",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcStructuralCurveConnection",
      "group": 1,
      "details": {
        "definition": " IfcStructuralCurveConnection\n SUBTYPE OF (IfcStructuralConnection);\n"
      }
    },
    {
      "id": "IfcStructuralCurveMember",
      "group": 1,
      "details": {
        "definition": " IfcStructuralCurveMember\n SUPERTYPE OF (ONEOF\n\t(IfcStructuralCurveMemberVarying))\n SUBTYPE OF (IfcStructuralMember);\n\tPredefinedType : IfcStructuralCurveTypeEnum;\n"
      }
    },
    {
      "id": "IfcStructuralCurveTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStructuralCurveMemberVarying",
      "group": 1,
      "details": {
        "definition": " IfcStructuralCurveMemberVarying\n SUBTYPE OF (IfcStructuralCurveMember);\n"
      }
    },
    {
      "id": "IfcStructuralLinearAction",
      "group": 1,
      "details": {
        "definition": " IfcStructuralLinearAction\n SUPERTYPE OF (ONEOF\n\t(IfcStructuralLinearActionVarying))\n SUBTYPE OF (IfcStructuralAction);\n\tProjectedOrTrue : IfcProjectedOrTrueLengthEnum;\n WHERE\n\tWR61 : SIZEOF(['IFC2X3.IFCSTRUCTURALLOADLINEARFORCE',\n                     'IFC2X3.IFCSTRUCTURALLOADTEMPERATURE']\n             * TYPEOF(SELF\\IfcStructuralActivity.AppliedLoad)) = 1;\n"
      }
    },
    {
      "id": "IfcProjectedOrTrueLengthEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStructuralLinearActionVarying",
      "group": 1,
      "details": {
        "definition": " IfcStructuralLinearActionVarying\n SUBTYPE OF (IfcStructuralLinearAction);\n\tVaryingAppliedLoadLocation : IfcShapeAspect;\n\tSubsequentAppliedLoads : LIST [1:?] OF IfcStructuralLoad;\n DERIVE\n\tVaryingAppliedLoads : LIST [2:?] OF IfcStructuralLoad := IfcAddToBeginOfList(SELF\\IfcStructuralActivity.AppliedLoad, SubsequentAppliedLoads);\n"
      }
    },
    {
      "id": "IfcStructuralLoadGroup",
      "group": 1,
      "details": {
        "definition": " IfcStructuralLoadGroup\n SUBTYPE OF (IfcGroup);\n\tPredefinedType : IfcLoadGroupTypeEnum;\n\tActionType : IfcActionTypeEnum;\n\tActionSource : IfcActionSourceTypeEnum;\n\tCoefficient : OPTIONAL IfcPositiveRatioMeasure;\n\tPurpose : OPTIONAL IfcLabel;\n INVERSE\n\tSourceOfResultGroup : SET [0:1] OF IfcStructuralResultGroup FOR ResultForLoadGroup;\n\tLoadGroupFor : SET [0:?] OF IfcStructuralAnalysisModel FOR LoadedBy;\n"
      }
    },
    {
      "id": "IfcLoadGroupTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcActionTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcActionSourceTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStructuralLoadLinearForce",
      "group": 1,
      "details": {
        "definition": " IfcStructuralLoadLinearForce\n SUBTYPE OF (IfcStructuralLoadStatic);\n\tLinearForceX : OPTIONAL IfcLinearForceMeasure;\n\tLinearForceY : OPTIONAL IfcLinearForceMeasure;\n\tLinearForceZ : OPTIONAL IfcLinearForceMeasure;\n\tLinearMomentX : OPTIONAL IfcLinearMomentMeasure;\n\tLinearMomentY : OPTIONAL IfcLinearMomentMeasure;\n\tLinearMomentZ : OPTIONAL IfcLinearMomentMeasure;\n"
      }
    },
    {
      "id": "IfcStructuralLoadStatic",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcStructuralLoadPlanarForce",
      "group": 1,
      "details": {
        "definition": " IfcStructuralLoadPlanarForce\n SUBTYPE OF (IfcStructuralLoadStatic);\n\tPlanarForceX : OPTIONAL IfcPlanarForceMeasure;\n\tPlanarForceY : OPTIONAL IfcPlanarForceMeasure;\n\tPlanarForceZ : OPTIONAL IfcPlanarForceMeasure;\n"
      }
    },
    {
      "id": "IfcStructuralLoadSingleDisplacement",
      "group": 1,
      "details": {
        "definition": " IfcStructuralLoadSingleDisplacement\n SUPERTYPE OF (ONEOF\n\t(IfcStructuralLoadSingleDisplacementDistortion))\n SUBTYPE OF (IfcStructuralLoadStatic);\n\tDisplacementX : OPTIONAL IfcLengthMeasure;\n\tDisplacementY : OPTIONAL IfcLengthMeasure;\n\tDisplacementZ : OPTIONAL IfcLengthMeasure;\n\tRotationalDisplacementRX : OPTIONAL IfcPlaneAngleMeasure;\n\tRotationalDisplacementRY : OPTIONAL IfcPlaneAngleMeasure;\n\tRotationalDisplacementRZ : OPTIONAL IfcPlaneAngleMeasure;\n"
      }
    },
    {
      "id": "IfcStructuralLoadSingleDisplacementDistortion",
      "group": 1,
      "details": {
        "definition": " IfcStructuralLoadSingleDisplacementDistortion\n SUBTYPE OF (IfcStructuralLoadSingleDisplacement);\n\tDistortion : OPTIONAL IfcCurvatureMeasure;\n"
      }
    },
    {
      "id": "IfcStructuralLoadSingleForce",
      "group": 1,
      "details": {
        "definition": " IfcStructuralLoadSingleForce\n SUPERTYPE OF (ONEOF\n\t(IfcStructuralLoadSingleForceWarping))\n SUBTYPE OF (IfcStructuralLoadStatic);\n\tForceX : OPTIONAL IfcForceMeasure;\n\tForceY : OPTIONAL IfcForceMeasure;\n\tForceZ : OPTIONAL IfcForceMeasure;\n\tMomentX : OPTIONAL IfcTorqueMeasure;\n\tMomentY : OPTIONAL IfcTorqueMeasure;\n\tMomentZ : OPTIONAL IfcTorqueMeasure;\n"
      }
    },
    {
      "id": "IfcStructuralLoadSingleForceWarping",
      "group": 1,
      "details": {
        "definition": " IfcStructuralLoadSingleForceWarping\n SUBTYPE OF (IfcStructuralLoadSingleForce);\n\tWarpingMoment : OPTIONAL IfcWarpingMomentMeasure;\n"
      }
    },
    {
      "id": "IfcStructuralLoadTemperature",
      "group": 1,
      "details": {
        "definition": " IfcStructuralLoadTemperature\n SUBTYPE OF (IfcStructuralLoadStatic);\n\tDeltaT_Constant : OPTIONAL IfcThermodynamicTemperatureMeasure;\n\tDeltaT_Y : OPTIONAL IfcThermodynamicTemperatureMeasure;\n\tDeltaT_Z : OPTIONAL IfcThermodynamicTemperatureMeasure;\n"
      }
    },
    {
      "id": "IfcStructuralPlanarAction",
      "group": 1,
      "details": {
        "definition": " IfcStructuralPlanarAction\n SUPERTYPE OF (ONEOF\n\t(IfcStructuralPlanarActionVarying))\n SUBTYPE OF (IfcStructuralAction);\n\tProjectedOrTrue : IfcProjectedOrTrueLengthEnum;\n WHERE\n\tWR61 : SIZEOF(['IFC2X3.IFCSTRUCTURALLOADPLANARFORCE',\n                     'IFC2X3.IFCSTRUCTURALLOADTEMPERATURE']\n             * TYPEOF(SELF\\IfcStructuralActivity.AppliedLoad)) = 1;\n"
      }
    },
    {
      "id": "IfcStructuralPlanarActionVarying",
      "group": 1,
      "details": {
        "definition": " IfcStructuralPlanarActionVarying\n SUBTYPE OF (IfcStructuralPlanarAction);\n\tVaryingAppliedLoadLocation : IfcShapeAspect;\n\tSubsequentAppliedLoads : LIST [2:?] OF IfcStructuralLoad;\n DERIVE\n\tVaryingAppliedLoads : LIST [3:?] OF IfcStructuralLoad := IfcAddToBeginOfList(SELF\\IfcStructuralActivity.AppliedLoad, SubsequentAppliedLoads);\n"
      }
    },
    {
      "id": "IfcStructuralPointAction",
      "group": 1,
      "details": {
        "definition": " IfcStructuralPointAction\n SUBTYPE OF (IfcStructuralAction);\n WHERE\n\tWR61 : SIZEOF(['IFC2X3.IFCSTRUCTURALLOADSINGLEFORCE',\n                     'IFC2X3.IFCSTRUCTURALLOADSINGLEDISPLACEMENT']\n             * TYPEOF(SELF\\IfcStructuralActivity.AppliedLoad)) = 1;\n"
      }
    },
    {
      "id": "IfcStructuralPointConnection",
      "group": 1,
      "details": {
        "definition": " IfcStructuralPointConnection\n SUBTYPE OF (IfcStructuralConnection);\n"
      }
    },
    {
      "id": "IfcStructuralPointReaction",
      "group": 1,
      "details": {
        "definition": " IfcStructuralPointReaction\n SUBTYPE OF (IfcStructuralReaction);\n WHERE\n\tWR61 : SIZEOF(['IFC2X3.IFCSTRUCTURALLOADSINGLEFORCE',\n                     'IFC2X3.IFCSTRUCTURALLOADSINGLEDISPLACEMENT']\n             * TYPEOF(SELF\\IfcStructuralActivity.AppliedLoad)) = 1;\n"
      }
    },
    {
      "id": "IfcStructuralReaction",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcStructuralProfileProperties",
      "group": 1,
      "details": {
        "definition": " IfcStructuralProfileProperties\n SUPERTYPE OF (ONEOF\n\t(IfcStructuralSteelProfileProperties))\n SUBTYPE OF (IfcGeneralProfileProperties);\n\tTorsionalConstantX : OPTIONAL IfcMomentOfInertiaMeasure;\n\tMomentOfInertiaYZ : OPTIONAL IfcMomentOfInertiaMeasure;\n\tMomentOfInertiaY : OPTIONAL IfcMomentOfInertiaMeasure;\n\tMomentOfInertiaZ : OPTIONAL IfcMomentOfInertiaMeasure;\n\tWarpingConstant : OPTIONAL IfcWarpingConstantMeasure;\n\tShearCentreZ : OPTIONAL IfcLengthMeasure;\n\tShearCentreY : OPTIONAL IfcLengthMeasure;\n\tShearDeformationAreaZ : OPTIONAL IfcAreaMeasure;\n\tShearDeformationAreaY : OPTIONAL IfcAreaMeasure;\n\tMaximumSectionModulusY : OPTIONAL IfcSectionModulusMeasure;\n\tMinimumSectionModulusY : OPTIONAL IfcSectionModulusMeasure;\n\tMaximumSectionModulusZ : OPTIONAL IfcSectionModulusMeasure;\n\tMinimumSectionModulusZ : OPTIONAL IfcSectionModulusMeasure;\n\tTorsionalSectionModulus : OPTIONAL IfcSectionModulusMeasure;\n\tCentreOfGravityInX : OPTIONAL IfcLengthMeasure;\n\tCentreOfGravityInY : OPTIONAL IfcLengthMeasure;\n WHERE\n\tWR21 : NOT(EXISTS(ShearDeformationAreaY)) OR (ShearDeformationAreaY >= 0.);\n\tWR22 : NOT(EXISTS(ShearDeformationAreaZ)) OR (ShearDeformationAreaZ >= 0.);\n"
      }
    },
    {
      "id": "IfcStructuralResultGroup",
      "group": 1,
      "details": {
        "definition": " IfcStructuralResultGroup\n SUBTYPE OF (IfcGroup);\n\tTheoryType : IfcAnalysisTheoryTypeEnum;\n\tResultForLoadGroup : OPTIONAL IfcStructuralLoadGroup;\n\tIsLinear : BOOLEAN;\n INVERSE\n\tResultGroupFor : SET [0:1] OF IfcStructuralAnalysisModel FOR HasResults;\n"
      }
    },
    {
      "id": "IfcAnalysisTheoryTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStructuralSteelProfileProperties",
      "group": 1,
      "details": {
        "definition": " IfcStructuralSteelProfileProperties\n SUBTYPE OF (IfcStructuralProfileProperties);\n\tShearAreaZ : OPTIONAL IfcAreaMeasure;\n\tShearAreaY : OPTIONAL IfcAreaMeasure;\n\tPlasticShapeFactorY : OPTIONAL IfcPositiveRatioMeasure;\n\tPlasticShapeFactorZ : OPTIONAL IfcPositiveRatioMeasure;\n WHERE\n\tWR31 : NOT(EXISTS(ShearAreaY)) OR (ShearAreaY >= 0.);\n\tWR32 : NOT(EXISTS(ShearAreaZ)) OR (ShearAreaZ >= 0.);\n"
      }
    },
    {
      "id": "IfcStructuralSurfaceConnection",
      "group": 1,
      "details": {
        "definition": " IfcStructuralSurfaceConnection\n SUBTYPE OF (IfcStructuralConnection);\n"
      }
    },
    {
      "id": "IfcStructuralSurfaceMember",
      "group": 1,
      "details": {
        "definition": " IfcStructuralSurfaceMember\n SUPERTYPE OF (ONEOF\n\t(IfcStructuralSurfaceMemberVarying))\n SUBTYPE OF (IfcStructuralMember);\n\tPredefinedType : IfcStructuralSurfaceTypeEnum;\n\tThickness : OPTIONAL IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcStructuralSurfaceTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcStructuralSurfaceMemberVarying",
      "group": 1,
      "details": {
        "definition": " IfcStructuralSurfaceMemberVarying\n SUBTYPE OF (IfcStructuralSurfaceMember);\n\tSubsequentThickness : LIST [2:?] OF IfcPositiveLengthMeasure;\n\tVaryingThicknessLocation : IfcShapeAspect;\n DERIVE\n\tVaryingThickness : LIST [3:?] OF IfcPositiveLengthMeasure := IfcAddToBeginOfList(SELF\\IfcStructuralSurfaceMember.Thickness, SubsequentThickness);\n WHERE\n\tWR61 : EXISTS(SELF\\IfcStructuralSurfaceMember.Thickness);\n\tWR62 : SIZEOF(QUERY(temp <* SELF.VaryingThicknessLocation.ShapeRepresentations |\n               NOT(SIZEOF(temp\\IfcRepresentation.Items) = 1)\n               )) = 0;\n\tWR63 : SIZEOF(QUERY(temp <* SELF.VaryingThicknessLocation.ShapeRepresentations |\n               NOT(('IFC2X3.IFCCARTESIANPOINT' IN TYPEOF(temp\\IfcRepresentation.Items[1]))\n                     OR\n                   ('IFC2X3.IFCPOINTONSURFACE' IN TYPEOF(temp\\IfcRepresentation.Items[1])))\n               )) = 0;\n"
      }
    },
    {
      "id": "IfcStructuredDimensionCallout",
      "group": 1,
      "details": {
        "definition": " IfcStructuredDimensionCallout\n SUBTYPE OF (IfcDraughtingCallout);\n WHERE\n\tWR31 : SIZEOF(QUERY ( Ato <* QUERY ( Con <* SELF.contents | (\n                   'IFC2X3.IFCANNOTATIONTEXTOCCURRENCE' IN \n                    TYPEOF(Con)) ) | (NOT (Ato.Name IN ['dimension value',\n                   'tolerance value','unit text','prefix text','suffix text']))))\n                  = 0;\n"
      }
    },
    {
      "id": "IfcStyleModel",
      "group": 1,
      "details": {
        "definition": " IfcStyleModel\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcStyledRepresentation))\n SUBTYPE OF (IfcRepresentation);\n"
      }
    },
    {
      "id": "IfcStyledRepresentation",
      "group": 1,
      "details": {
        "definition": " IfcStyledRepresentation\n SUBTYPE OF (IfcStyleModel);\n WHERE\n\tWR21 : SIZEOF(QUERY(temp <* SELF\\IfcRepresentation.Items | \n               (NOT('IFC2X3.IFCSTYLEDITEM' IN TYPEOF(temp)))\n             )) = 0;\n"
      }
    },
    {
      "id": "IfcSubContractResource",
      "group": 1,
      "details": {
        "definition": " IfcSubContractResource\n SUBTYPE OF (IfcConstructionResource);\n\tSubContractor : OPTIONAL IfcActorSelect;\n\tJobDescription : OPTIONAL IfcText;\n"
      }
    },
    {
      "id": "IfcSubedge",
      "group": 1,
      "details": {
        "definition": " IfcSubedge\n SUBTYPE OF (IfcEdge);\n\tParentEdge : IfcEdge;\n"
      }
    },
    {
      "id": "IfcSurfaceCurveSweptAreaSolid",
      "group": 1,
      "details": {
        "definition": " IfcSurfaceCurveSweptAreaSolid\n SUBTYPE OF (IfcSweptAreaSolid);\n\tDirectrix : IfcCurve;\n\tStartParam : IfcParameterValue;\n\tEndParam : IfcParameterValue;\n\tReferenceSurface : IfcSurface;\n"
      }
    },
    {
      "id": "IfcSurfaceOfLinearExtrusion",
      "group": 1,
      "details": {
        "definition": " IfcSurfaceOfLinearExtrusion\n SUBTYPE OF (IfcSweptSurface);\n\tExtrudedDirection : IfcDirection;\n\tDepth : IfcLengthMeasure;\n DERIVE\n\tExtrusionAxis : IfcVector := IfcRepresentationItem() || IfcGeometricRepresentationItem () || IfcVector (ExtrudedDirection, Depth);\n WHERE\n\tWR41 : Depth > 0.;\n"
      }
    },
    {
      "id": "IfcSweptSurface",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcSurfaceOfRevolution",
      "group": 1,
      "details": {
        "definition": " IfcSurfaceOfRevolution\n SUBTYPE OF (IfcSweptSurface);\n\tAxisPosition : IfcAxis1Placement;\n DERIVE\n\tAxisLine : IfcLine := IfcRepresentationItem() || IfcGeometricRepresentationItem () || IfcCurve() || IfcLine(AxisPosition.Location, \n                       IfcRepresentationItem() || IfcGeometricRepresentationItem () || IfcVector(AxisPosition.Z,1.0));\n"
      }
    },
    {
      "id": "IfcSurfaceStyle",
      "group": 1,
      "details": {
        "definition": " IfcSurfaceStyle\n SUBTYPE OF (IfcPresentationStyle);\n\tSide : IfcSurfaceSide;\n\tStyles : SET [1:5] OF IfcSurfaceStyleElementSelect;\n WHERE\n\tWR11 : SIZEOF(QUERY(Style <* SELF.Styles |\n               'IFC2X3.IFCSURFACESTYLESHADING' IN\n                TYPEOF(Style)\n               )) <= 1;\n\tWR12 : SIZEOF(QUERY(Style <* SELF.Styles |\n               'IFC2X3.IFCSURFACESTYLELIGHTING' IN\n                TYPEOF(Style)\n               )) <= 1;\n\tWR13 : SIZEOF(QUERY(Style <* SELF.Styles |\n               'IFC2X3.IFCSURFACESTYLEREFRACTION' IN\n                TYPEOF(Style)\n               )) <= 1;\n\tWR14 : SIZEOF(QUERY(Style <* SELF.Styles |\n               'IFC2X3.IFCSURFACESTYLEWITHTEXTURES' IN\n                TYPEOF(Style)\n               )) <= 1;\n\tWR15 : SIZEOF(QUERY(Style <* SELF.Styles |\n               'IFC2X3.IFCEXTERNALLYDEFINEDSURFACESTYLE' IN\n                TYPEOF(Style)\n               )) <= 1;\n"
      }
    },
    {
      "id": "IfcSurfaceSide",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSurfaceStyleLighting",
      "group": 1,
      "details": {
        "definition": " IfcSurfaceStyleLighting;\n\tDiffuseTransmissionColour : IfcColourRgb;\n\tDiffuseReflectionColour : IfcColourRgb;\n\tTransmissionColour : IfcColourRgb;\n\tReflectanceColour : IfcColourRgb;\n"
      }
    },
    {
      "id": "IfcSurfaceStyleRefraction",
      "group": 1,
      "details": {
        "definition": " IfcSurfaceStyleRefraction;\n\tRefractionIndex : OPTIONAL IfcReal;\n\tDispersionFactor : OPTIONAL IfcReal;\n"
      }
    },
    {
      "id": "IfcSurfaceStyleRendering",
      "group": 1,
      "details": {
        "definition": " IfcSurfaceStyleRendering\n SUBTYPE OF (IfcSurfaceStyleShading);\n\tTransparency : OPTIONAL IfcNormalisedRatioMeasure;\n\tDiffuseColour : OPTIONAL IfcColourOrFactor;\n\tTransmissionColour : OPTIONAL IfcColourOrFactor;\n\tDiffuseTransmissionColour : OPTIONAL IfcColourOrFactor;\n\tReflectionColour : OPTIONAL IfcColourOrFactor;\n\tSpecularColour : OPTIONAL IfcColourOrFactor;\n\tSpecularHighlight : OPTIONAL IfcSpecularHighlightSelect;\n\tReflectanceMethod : IfcReflectanceMethodEnum;\n"
      }
    },
    {
      "id": "IfcSurfaceStyleShading",
      "group": 1,
      "details": {}
    },
    {
      "id": "IfcReflectanceMethodEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSurfaceStyleWithTextures",
      "group": 1,
      "details": {
        "definition": " IfcSurfaceStyleWithTextures;\n\tTextures : LIST [1:?] OF IfcSurfaceTexture;\n"
      }
    },
    {
      "id": "IfcSurfaceTextureEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSweptDiskSolid",
      "group": 1,
      "details": {
        "definition": " IfcSweptDiskSolid\n SUBTYPE OF (IfcSolidModel);\n\tDirectrix : IfcCurve;\n\tRadius : IfcPositiveLengthMeasure;\n\tInnerRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tStartParam : IfcParameterValue;\n\tEndParam : IfcParameterValue;\n WHERE\n\tWR1 : Directrix.Dim = 3;\n\tWR2 : (NOT EXISTS(InnerRadius)) OR (Radius > InnerRadius);\n"
      }
    },
    {
      "id": "IfcSwitchingDeviceType",
      "group": 1,
      "details": {
        "definition": " IfcSwitchingDeviceType\n SUBTYPE OF (IfcFlowControllerType);\n\tPredefinedType : IfcSwitchingDeviceTypeEnum;\n"
      }
    },
    {
      "id": "IfcSwitchingDeviceTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSymbolStyle",
      "group": 1,
      "details": {
        "definition": " IfcSymbolStyle\n SUBTYPE OF (IfcPresentationStyle);\n\tStyleOfSymbol : IfcSymbolStyleSelect;\n"
      }
    },
    {
      "id": "IfcSymbolStyleSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcSystemFurnitureElementType",
      "group": 1,
      "details": {
        "definition": " IfcSystemFurnitureElementType\n SUBTYPE OF (IfcFurnishingElementType);\n"
      }
    },
    {
      "id": "IfcTShapeProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcTShapeProfileDef\n SUBTYPE OF (IfcParameterizedProfileDef);\n\tDepth : IfcPositiveLengthMeasure;\n\tFlangeWidth : IfcPositiveLengthMeasure;\n\tWebThickness : IfcPositiveLengthMeasure;\n\tFlangeThickness : IfcPositiveLengthMeasure;\n\tFilletRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tFlangeEdgeRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tWebEdgeRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tWebSlope : OPTIONAL IfcPlaneAngleMeasure;\n\tFlangeSlope : OPTIONAL IfcPlaneAngleMeasure;\n\tCentreOfGravityInY : OPTIONAL IfcPositiveLengthMeasure;\n WHERE\n\tWR1 : FlangeThickness < Depth;\n\tWR2 : WebThickness < FlangeWidth;\n"
      }
    },
    {
      "id": "IfcTable",
      "group": 1,
      "details": {
        "definition": " IfcTable;\n\tName : STRING;\n\tRows : LIST [1:?] OF IfcTableRow;\n DERIVE\n\tNumberOfCellsInRow : INTEGER := HIINDEX(Rows[1].RowCells);\n\tNumberOfHeadings : INTEGER := SIZEOF(QUERY( Temp <* Rows | Temp.IsHeading));\n\tNumberOfDataRows : INTEGER := SIZEOF(QUERY( Temp <* Rows | NOT(Temp.IsHeading)));\n WHERE\n\tWR1 : SIZEOF(QUERY( Temp <* Rows | HIINDEX(Temp.RowCells) <> HIINDEX(Rows[1].RowCells))) = 0;\n\tWR2 : SIZEOF(QUERY( Temp <* Rows | HIINDEX(Temp.RowCells) <> HIINDEX(Rows[1].RowCells))) = 0;\n\tWR3 : { 0 <= NumberOfHeadings <= 1 };\n"
      }
    },
    {
      "id": "IfcTableRow",
      "group": 1,
      "details": {
        "definition": " IfcTableRow;\n\tRowCells : LIST [1:?] OF IfcValue;\n\tIsHeading : BOOLEAN;\n INVERSE\n\tOfTable : IfcTable FOR Rows;\n"
      }
    },
    {
      "id": "IfcTankType",
      "group": 1,
      "details": {
        "definition": " IfcTankType\n SUBTYPE OF (IfcFlowStorageDeviceType);\n\tPredefinedType : IfcTankTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcTankTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcTankTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcTankTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTelecomAddress",
      "group": 1,
      "details": {
        "definition": " IfcTelecomAddress\n SUBTYPE OF (IfcAddress);\n\tTelephoneNumbers : OPTIONAL LIST [1:?] OF IfcLabel;\n\tFacsimileNumbers : OPTIONAL LIST [1:?] OF IfcLabel;\n\tPagerNumber : OPTIONAL IfcLabel;\n\tElectronicMailAddresses : OPTIONAL LIST [1:?] OF IfcLabel;\n\tWWWHomePageURL : OPTIONAL IfcLabel;\n WHERE\n\tWR1 : EXISTS (TelephoneNumbers) OR\n            EXISTS (PagerNumber) OR\n            EXISTS (FacsimileNumbers) OR \n            EXISTS (ElectronicMailAddresses) OR \n            EXISTS (WWWHomePageURL);\n"
      }
    },
    {
      "id": "IfcTendon",
      "group": 1,
      "details": {
        "definition": " IfcTendon\n SUBTYPE OF (IfcReinforcingElement);\n\tPredefinedType : IfcTendonTypeEnum;\n\tNominalDiameter : IfcPositiveLengthMeasure;\n\tCrossSectionArea : IfcAreaMeasure;\n\tTensionForce : OPTIONAL IfcForceMeasure;\n\tPreStress : OPTIONAL IfcPressureMeasure;\n\tFrictionCoefficient : OPTIONAL IfcNormalisedRatioMeasure;\n\tAnchorageSlip : OPTIONAL IfcPositiveLengthMeasure;\n\tMinCurvatureRadius : OPTIONAL IfcPositiveLengthMeasure;\n WHERE\n\tWR1 : (PredefinedType <> IfcTendonTypeEnum.USERDEFINED) OR ((PredefinedType = IfcTendonTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcObject.ObjectType));\n"
      }
    },
    {
      "id": "IfcTendonTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTendonAnchor",
      "group": 1,
      "details": {
        "definition": " IfcTendonAnchor\n SUBTYPE OF (IfcReinforcingElement);\n"
      }
    },
    {
      "id": "IfcTextLiteral",
      "group": 1,
      "details": {
        "definition": " IfcTextLiteral\n SUPERTYPE OF (ONEOF\n\t(IfcTextLiteralWithExtent))\n SUBTYPE OF (IfcGeometricRepresentationItem);\n\tLiteral : IfcPresentableText;\n\tPlacement : IfcAxis2Placement;\n\tPath : IfcTextPath;\n"
      }
    },
    {
      "id": "IfcPresentableText",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTextPath",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTextLiteralWithExtent",
      "group": 1,
      "details": {
        "definition": " IfcTextLiteralWithExtent\n SUBTYPE OF (IfcTextLiteral);\n\tExtent : IfcPlanarExtent;\n\tBoxAlignment : IfcBoxAlignment;\n WHERE\n\tWR31 : NOT('IFC2X3.IFCPLANARBOX' IN TYPEOF(Extent));\n"
      }
    },
    {
      "id": "IfcBoxAlignment",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTextStyle",
      "group": 1,
      "details": {
        "definition": " IfcTextStyle\n SUBTYPE OF (IfcPresentationStyle);\n\tTextCharacterAppearance : OPTIONAL IfcCharacterStyleSelect;\n\tTextStyle : OPTIONAL IfcTextStyleSelect;\n\tTextFontStyle : IfcTextFontSelect;\n"
      }
    },
    {
      "id": "IfcTextFontSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTextStyleFontModel",
      "group": 1,
      "details": {
        "definition": " IfcTextStyleFontModel\n SUBTYPE OF (IfcPreDefinedTextFont);\n\tFontFamily : OPTIONAL LIST [1:?] OF IfcTextFontName;\n\tFontStyle : OPTIONAL IfcFontStyle;\n\tFontVariant : OPTIONAL IfcFontVariant;\n\tFontWeight : OPTIONAL IfcFontWeight;\n\tFontSize : IfcSizeSelect;\n WHERE\n\tWR31 : ('IFC2X3.IFCLENGTHMEASURE' IN TYPEOF(SELF.FontSize)) AND\n             (SELF.FontSize > 0.);\n"
      }
    },
    {
      "id": "IfcSizeSelect",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTextStyleForDefinedFont",
      "group": 1,
      "details": {
        "definition": " IfcTextStyleForDefinedFont;\n\tColour : IfcColour;\n\tBackgroundColour : OPTIONAL IfcColour;\n"
      }
    },
    {
      "id": "IfcColour",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTextStyleTextModel",
      "group": 1,
      "details": {
        "definition": " IfcTextStyleTextModel;\n\tTextIndent : OPTIONAL IfcSizeSelect;\n\tTextAlign : OPTIONAL IfcTextAlignment;\n\tTextDecoration : OPTIONAL IfcTextDecoration;\n\tLetterSpacing : OPTIONAL IfcSizeSelect;\n\tWordSpacing : OPTIONAL IfcSizeSelect;\n\tTextTransform : OPTIONAL IfcTextTransformation;\n\tLineHeight : OPTIONAL IfcSizeSelect;\n"
      }
    },
    {
      "id": "IfcTextStyleWithBoxCharacteristics",
      "group": 1,
      "details": {
        "definition": " IfcTextStyleWithBoxCharacteristics;\n\tBoxHeight : OPTIONAL IfcPositiveLengthMeasure;\n\tBoxWidth : OPTIONAL IfcPositiveLengthMeasure;\n\tBoxSlantAngle : OPTIONAL IfcPlaneAngleMeasure;\n\tBoxRotateAngle : OPTIONAL IfcPlaneAngleMeasure;\n\tCharacterSpacing : OPTIONAL IfcSizeSelect;\n"
      }
    },
    {
      "id": "IfcTextureCoordinate",
      "group": 1,
      "details": {
        "definition": " IfcTextureCoordinate\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcTextureCoordinateGenerator\n\t,IfcTextureMap));\n INVERSE\n\tAnnotatedSurface : SET [1:1] OF IfcAnnotationSurface FOR TextureCoordinates;\n"
      }
    },
    {
      "id": "IfcTextureCoordinateGenerator",
      "group": 1,
      "details": {
        "definition": " IfcTextureCoordinateGenerator\n SUBTYPE OF (IfcTextureCoordinate);\n\tMode : IfcLabel;\n\tParameter : LIST [1:?] OF IfcSimpleValue;\n"
      }
    },
    {
      "id": "IfcTextureMap",
      "group": 1,
      "details": {
        "definition": " IfcTextureMap\n SUBTYPE OF (IfcTextureCoordinate);\n\tTextureMaps : SET [1:?] OF IfcVertexBasedTextureMap;\n WHERE\n\tWR11 : SIZEOF([\n               'IFC2X3.IFCSHELLBASEDSURFACEMODEL',\n               'IFC2X3.IFCFACEBASEDSURFACEMODEL',\n               'IFC2X3.IFCFACETEDBREP',\n               'IFC2X3.IFCFACETEDBREPWITHVOIDS'] \n              * TYPEOF(SELF\\IfcTextureCoordinate.AnnotatedSurface[1].Item)\n               ) >= 1;\n"
      }
    },
    {
      "id": "IfcTextureVertex",
      "group": 1,
      "details": {
        "definition": " IfcTextureVertex;\n\tCoordinates : LIST [2:2] OF IfcParameterValue;\n"
      }
    },
    {
      "id": "IfcThermalMaterialProperties",
      "group": 1,
      "details": {
        "definition": " IfcThermalMaterialProperties\n SUBTYPE OF (IfcMaterialProperties);\n\tSpecificHeatCapacity : OPTIONAL IfcSpecificHeatCapacityMeasure;\n\tBoilingPoint : OPTIONAL IfcThermodynamicTemperatureMeasure;\n\tFreezingPoint : OPTIONAL IfcThermodynamicTemperatureMeasure;\n\tThermalConductivity : OPTIONAL IfcThermalConductivityMeasure;\n UNIQUE\n\tUR11 : Material;\n"
      }
    },
    {
      "id": "IfcTimeSeriesDataTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcDataOriginEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTimeSeriesReferenceRelationship",
      "group": 1,
      "details": {
        "definition": " IfcTimeSeriesReferenceRelationship;\n\tReferencedTimeSeries : IfcTimeSeries;\n\tTimeSeriesReferences : SET [1:?] OF IfcDocumentSelect;\n"
      }
    },
    {
      "id": "IfcTimeSeriesSchedule",
      "group": 1,
      "details": {
        "definition": " IfcTimeSeriesSchedule\n SUBTYPE OF (IfcControl);\n\tApplicableDates : OPTIONAL LIST [1:?] OF IfcDateTimeSelect;\n\tTimeSeriesScheduleType : IfcTimeSeriesScheduleTypeEnum;\n\tTimeSeries : IfcTimeSeries;\n WHERE\n\tWR41 : NOT(TimeSeriesScheduleType=IfcTimeSeriesScheduleTypeEnum.USERDEFINED) OR EXISTS(SELF\\IfcObject.ObjectType);\n"
      }
    },
    {
      "id": "IfcTimeSeriesScheduleTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTimeSeriesValue",
      "group": 1,
      "details": {
        "definition": " IfcTimeSeriesValue;\n\tListValues : LIST [1:?] OF IfcValue;\n"
      }
    },
    {
      "id": "IfcTopologyRepresentation",
      "group": 1,
      "details": {
        "definition": " IfcTopologyRepresentation\n SUBTYPE OF (IfcShapeModel);\n WHERE\n\tWR21 : SIZEOF(QUERY(temp <* SELF\\IfcRepresentation.Items | \n               NOT('IFC2X3.IFCTOPOLOGICALREPRESENTATIONITEM' IN TYPEOF(temp))\n             )) = 0;\n\tWR22 : EXISTS(SELF\\IfcRepresentation.RepresentationType);\n\tWR23 : IfcTopologyRepresentationTypes(SELF\\IfcRepresentation.RepresentationType, SELF\\IfcRepresentation.Items);\n"
      }
    },
    {
      "id": "IfcTransformerType",
      "group": 1,
      "details": {
        "definition": " IfcTransformerType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcTransformerTypeEnum;\n"
      }
    },
    {
      "id": "IfcTransformerTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTransportElement",
      "group": 1,
      "details": {
        "definition": " IfcTransportElement\n SUBTYPE OF (IfcElement);\n\tOperationType : OPTIONAL IfcTransportElementTypeEnum;\n\tCapacityByWeight : OPTIONAL IfcMassMeasure;\n\tCapacityByNumber : OPTIONAL IfcCountMeasure;\n"
      }
    },
    {
      "id": "IfcTransportElementType",
      "group": 1,
      "details": {
        "definition": " IfcTransportElementType\n SUBTYPE OF (IfcElementType);\n\tPredefinedType : IfcTransportElementTypeEnum;\n"
      }
    },
    {
      "id": "IfcTransportElementTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTrapeziumProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcTrapeziumProfileDef\n SUBTYPE OF (IfcParameterizedProfileDef);\n\tBottomXDim : IfcPositiveLengthMeasure;\n\tTopXDim : IfcPositiveLengthMeasure;\n\tYDim : IfcPositiveLengthMeasure;\n\tTopXOffset : IfcLengthMeasure;\n"
      }
    },
    {
      "id": "IfcTrimmedCurve",
      "group": 1,
      "details": {
        "definition": " IfcTrimmedCurve\n SUBTYPE OF (IfcBoundedCurve);\n\tBasisCurve : IfcCurve;\n\tTrim1 : SET [1:2] OF IfcTrimmingSelect;\n\tTrim2 : SET [1:2] OF IfcTrimmingSelect;\n\tSenseAgreement : BOOLEAN;\n\tMasterRepresentation : IfcTrimmingPreference;\n WHERE\n\tWR41 : (HIINDEX(Trim1) = 1) OR (TYPEOF(Trim1[1]) <> TYPEOF(Trim1[2]));\n\tWR42 : (HIINDEX(Trim2) = 1) OR (TYPEOF(Trim2[1]) <> TYPEOF(Trim2[2]));\n\tWR43 : NOT('IFC2X3.IFCBOUNDEDCURVE' IN TYPEOF(BasisCurve));\n"
      }
    },
    {
      "id": "IfcTrimmingPreference",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTubeBundleType",
      "group": 1,
      "details": {
        "definition": " IfcTubeBundleType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcTubeBundleTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcTubeBundleTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcTubeBundleTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcTubeBundleTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcTwoDirectionRepeatFactor",
      "group": 1,
      "details": {
        "definition": " IfcTwoDirectionRepeatFactor\n SUBTYPE OF (IfcOneDirectionRepeatFactor);\n\tSecondRepeatFactor : IfcVector;\n"
      }
    },
    {
      "id": "IfcUShapeProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcUShapeProfileDef\n SUBTYPE OF (IfcParameterizedProfileDef);\n\tDepth : IfcPositiveLengthMeasure;\n\tFlangeWidth : IfcPositiveLengthMeasure;\n\tWebThickness : IfcPositiveLengthMeasure;\n\tFlangeThickness : IfcPositiveLengthMeasure;\n\tFilletRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tEdgeRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tFlangeSlope : OPTIONAL IfcPlaneAngleMeasure;\n\tCentreOfGravityInX : OPTIONAL IfcPositiveLengthMeasure;\n WHERE\n\tWR21 : FlangeThickness < (Depth / 2.);\n\tWR22 : WebThickness < FlangeWidth;\n"
      }
    },
    {
      "id": "IfcUnitaryEquipmentType",
      "group": 1,
      "details": {
        "definition": " IfcUnitaryEquipmentType\n SUBTYPE OF (IfcEnergyConversionDeviceType);\n\tPredefinedType : IfcUnitaryEquipmentTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcUnitaryEquipmentTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcUnitaryEquipmentTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcUnitaryEquipmentTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcValveType",
      "group": 1,
      "details": {
        "definition": " IfcValveType\n SUBTYPE OF (IfcFlowControllerType);\n\tPredefinedType : IfcValveTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcValveTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcValveTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcValveTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcVertexBasedTextureMap",
      "group": 1,
      "details": {
        "definition": " IfcVertexBasedTextureMap;\n\tTextureVertices : LIST [3:?] OF IfcTextureVertex;\n\tTexturePoints : LIST [3:?] OF IfcCartesianPoint;\n"
      }
    },
    {
      "id": "IfcVertexLoop",
      "group": 1,
      "details": {
        "definition": " IfcVertexLoop\n SUBTYPE OF (IfcLoop);\n\tLoopVertex : IfcVertex;\n"
      }
    },
    {
      "id": "IfcVertexPoint",
      "group": 1,
      "details": {
        "definition": " IfcVertexPoint\n SUBTYPE OF (IfcVertex);\n\tVertexGeometry : IfcPoint;\n"
      }
    },
    {
      "id": "IfcVibrationIsolatorType",
      "group": 1,
      "details": {
        "definition": " IfcVibrationIsolatorType\n SUBTYPE OF (IfcDiscreteAccessoryType);\n\tPredefinedType : IfcVibrationIsolatorTypeEnum;\n WHERE\n\tWR1 : (PredefinedType <> IfcVibrationIsolatorTypeEnum.USERDEFINED) OR\n            ((PredefinedType = IfcVibrationIsolatorTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcElementType.ElementType));\n"
      }
    },
    {
      "id": "IfcVibrationIsolatorTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcVirtualElement",
      "group": 1,
      "details": {
        "definition": " IfcVirtualElement\n SUBTYPE OF (IfcElement);\n"
      }
    },
    {
      "id": "IfcWall",
      "group": 1,
      "details": {
        "definition": " IfcWall\n SUPERTYPE OF (ONEOF\n\t(IfcWallStandardCase))\n SUBTYPE OF (IfcBuildingElement);\n WHERE\n\tWR1 : SIZEOF (QUERY(temp <* SELF\\IfcObjectDefinition.HasAssociations |\n              'IFC2X3.IFCRELASSOCIATESMATERIAL' IN TYPEOF(temp)\n              )) <= 1;\n"
      }
    },
    {
      "id": "IfcWallStandardCase",
      "group": 1,
      "details": {
        "definition": " IfcWallStandardCase\n SUBTYPE OF (IfcWall);\n WHERE\n\tWR1 : SIZEOF (QUERY(temp <* USEDIN(SELF, 'IFC2X3.IFCRELASSOCIATES.RELATEDOBJECTS') |\n                          ('IFC2X3.IFCRELASSOCIATESMATERIAL' IN TYPEOF(temp)) AND\n                          ('IFC2X3.IFCMATERIALLAYERSETUSAGE' IN TYPEOF(temp.RelatingMaterial))\n                          )) = 1;\n"
      }
    },
    {
      "id": "IfcWallType",
      "group": 1,
      "details": {
        "definition": " IfcWallType\n SUBTYPE OF (IfcBuildingElementType);\n\tPredefinedType : IfcWallTypeEnum;\n"
      }
    },
    {
      "id": "IfcWallTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcWasteTerminalType",
      "group": 1,
      "details": {
        "definition": " IfcWasteTerminalType\n SUBTYPE OF (IfcFlowTerminalType);\n\tPredefinedType : IfcWasteTerminalTypeEnum;\n"
      }
    },
    {
      "id": "IfcWasteTerminalTypeEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcWaterProperties",
      "group": 1,
      "details": {
        "definition": " IfcWaterProperties\n SUBTYPE OF (IfcMaterialProperties);\n\tIsPotable : OPTIONAL BOOLEAN;\n\tHardness : OPTIONAL IfcIonConcentrationMeasure;\n\tAlkalinityConcentration : OPTIONAL IfcIonConcentrationMeasure;\n\tAcidityConcentration : OPTIONAL IfcIonConcentrationMeasure;\n\tImpuritiesContent : OPTIONAL IfcNormalisedRatioMeasure;\n\tPHLevel : OPTIONAL IfcPHMeasure;\n\tDissolvedSolidsContent : OPTIONAL IfcNormalisedRatioMeasure;\n UNIQUE\n\tUR11 : Material;\n"
      }
    },
    {
      "id": "IfcWindow",
      "group": 1,
      "details": {
        "definition": " IfcWindow\n SUBTYPE OF (IfcBuildingElement);\n\tOverallHeight : OPTIONAL IfcPositiveLengthMeasure;\n\tOverallWidth : OPTIONAL IfcPositiveLengthMeasure;\n"
      }
    },
    {
      "id": "IfcWindowLiningProperties",
      "group": 1,
      "details": {
        "definition": " IfcWindowLiningProperties\n SUBTYPE OF (IfcPropertySetDefinition);\n\tLiningDepth : OPTIONAL IfcPositiveLengthMeasure;\n\tLiningThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tTransomThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tMullionThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tFirstTransomOffset : OPTIONAL IfcNormalisedRatioMeasure;\n\tSecondTransomOffset : OPTIONAL IfcNormalisedRatioMeasure;\n\tFirstMullionOffset : OPTIONAL IfcNormalisedRatioMeasure;\n\tSecondMullionOffset : OPTIONAL IfcNormalisedRatioMeasure;\n\tShapeAspectStyle : OPTIONAL IfcShapeAspect;\n WHERE\n\tWR31 : NOT(NOT(EXISTS(LiningDepth)) AND EXISTS(LiningThickness));\n\tWR32 : NOT(NOT(EXISTS(FirstTransomOffset)) AND EXISTS(SecondTransomOffset));\n\tWR33 : NOT(NOT(EXISTS(FirstMullionOffset)) AND EXISTS(SecondMullionOffset));\n\tWR34 : EXISTS(SELF\\IfcPropertySetDefinition.DefinesType[1]) AND \n             ('IFC2X3.IFCWINDOWSTYLE' IN TYPEOF(SELF\\IfcPropertySetDefinition.DefinesType[1]));\n"
      }
    },
    {
      "id": "IfcWindowPanelProperties",
      "group": 1,
      "details": {
        "definition": " IfcWindowPanelProperties\n SUBTYPE OF (IfcPropertySetDefinition);\n\tOperationType : IfcWindowPanelOperationEnum;\n\tPanelPosition : IfcWindowPanelPositionEnum;\n\tFrameDepth : OPTIONAL IfcPositiveLengthMeasure;\n\tFrameThickness : OPTIONAL IfcPositiveLengthMeasure;\n\tShapeAspectStyle : OPTIONAL IfcShapeAspect;\n"
      }
    },
    {
      "id": "IfcWindowPanelOperationEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcWindowStyle",
      "group": 1,
      "details": {
        "definition": " IfcWindowStyle\n SUBTYPE OF (IfcTypeProduct);\n\tConstructionType : IfcWindowStyleConstructionEnum;\n\tOperationType : IfcWindowStyleOperationEnum;\n\tParameterTakesPrecedence : BOOLEAN;\n\tSizeable : BOOLEAN;\n"
      }
    },
    {
      "id": "IfcWindowStyleConstructionEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcWindowStyleOperationEnum",
      "group": 2,
      "details": {}
    },
    {
      "id": "IfcWorkControl",
      "group": 1,
      "details": {
        "definition": " IfcWorkControl\n ABSTRACT SUPERTYPE OF (ONEOF\n\t(IfcWorkPlan\n\t,IfcWorkSchedule))\n SUBTYPE OF (IfcControl);\n\tIdentifier : IfcIdentifier;\n\tCreationDate : IfcDateTimeSelect;\n\tCreators : OPTIONAL SET [1:?] OF IfcPerson;\n\tPurpose : OPTIONAL IfcLabel;\n\tDuration : OPTIONAL IfcTimeMeasure;\n\tTotalFloat : OPTIONAL IfcTimeMeasure;\n\tStartTime : IfcDateTimeSelect;\n\tFinishTime : OPTIONAL IfcDateTimeSelect;\n\tWorkControlType : OPTIONAL IfcWorkControlTypeEnum;\n\tUserDefinedControlType : OPTIONAL IfcLabel;\n WHERE\n\tWR1 : (WorkControlType <> IfcWorkControlTypeEnum.USERDEFINED) OR\n            ((WorkControlType = IfcWorkControlTypeEnum.USERDEFINED) AND EXISTS(SELF\\IfcWorkControl.UserDefinedControlType));\n"
      }
    },
    {
      "id": "IfcWorkPlan",
      "group": 1,
      "details": {
        "definition": " IfcWorkPlan\n SUBTYPE OF (IfcWorkControl);\n"
      }
    },
    {
      "id": "IfcWorkSchedule",
      "group": 1,
      "details": {
        "definition": " IfcWorkSchedule\n SUBTYPE OF (IfcWorkControl);\n"
      }
    },
    {
      "id": "IfcZShapeProfileDef",
      "group": 1,
      "details": {
        "definition": " IfcZShapeProfileDef\n SUBTYPE OF (IfcParameterizedProfileDef);\n\tDepth : IfcPositiveLengthMeasure;\n\tFlangeWidth : IfcPositiveLengthMeasure;\n\tWebThickness : IfcPositiveLengthMeasure;\n\tFlangeThickness : IfcPositiveLengthMeasure;\n\tFilletRadius : OPTIONAL IfcPositiveLengthMeasure;\n\tEdgeRadius : OPTIONAL IfcPositiveLengthMeasure;\n WHERE\n\tWR21 : FlangeThickness < (Depth / 2.);\n"
      }
    },
    {
      "id": "IfcZone",
      "group": 1,
      "details": {
        "definition": " IfcZone\n SUBTYPE OF (IfcGroup);\n WHERE\n\tWR1 : SIZEOF (QUERY (temp <* SELF\\IfcGroup.IsGroupedBy.RelatedObjects |  NOT(('IFC2X3.IFCZONE' IN TYPEOF(temp)) OR ('IFC2X3.IFCSPACE' IN TYPEOF(temp))) )) = 0;\n"
      }
    }
  ],
  "links": [
    {
      "source": "Ifc2DCompositeCurve",
      "target": "IfcCompositeCurve",
      "value": 1
    },
    {
      "source": "IfcActionRequest",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcActionRequest",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcActor",
      "target": "IfcObject",
      "value": 1
    },
    {
      "source": "IfcActor",
      "target": "IfcActorSelect",
      "value": 1
    },
    {
      "source": "IfcActorRole",
      "target": "IfcRoleEnum",
      "value": 1
    },
    {
      "source": "IfcActuatorType",
      "target": "IfcDistributionControlElementType",
      "value": 1
    },
    {
      "source": "IfcActuatorType",
      "target": "IfcActuatorTypeEnum",
      "value": 1
    },
    {
      "source": "IfcAirTerminalBoxType",
      "target": "IfcFlowControllerType",
      "value": 1
    },
    {
      "source": "IfcAirTerminalBoxType",
      "target": "IfcAirTerminalBoxTypeEnum",
      "value": 1
    },
    {
      "source": "IfcAirTerminalType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcAirTerminalType",
      "target": "IfcAirTerminalTypeEnum",
      "value": 1
    },
    {
      "source": "IfcAirToAirHeatRecoveryType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcAirToAirHeatRecoveryType",
      "target": "IfcAirToAirHeatRecoveryTypeEnum",
      "value": 1
    },
    {
      "source": "IfcAlarmType",
      "target": "IfcDistributionControlElementType",
      "value": 1
    },
    {
      "source": "IfcAlarmType",
      "target": "IfcAlarmTypeEnum",
      "value": 1
    },
    {
      "source": "IfcAngularDimension",
      "target": "IfcDimensionCurveDirectedCallout",
      "value": 1
    },
    {
      "source": "IfcAnnotation",
      "target": "IfcProduct",
      "value": 1
    },
    {
      "source": "IfcAnnotationCurveOccurrence",
      "target": "IfcAnnotationOccurrence",
      "value": 1
    },
    {
      "source": "IfcAnnotationFillArea",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcAnnotationFillArea",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcAnnotationFillAreaOccurrence",
      "target": "IfcAnnotationOccurrence",
      "value": 1
    },
    {
      "source": "IfcAnnotationOccurrence",
      "target": "IfcStyledItem",
      "value": 1
    },
    {
      "source": "IfcAnnotationSurface",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcAnnotationSurface",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcAnnotationSurfaceOccurrence",
      "target": "IfcAnnotationOccurrence",
      "value": 1
    },
    {
      "source": "IfcAnnotationSymbolOccurrence",
      "target": "IfcAnnotationOccurrence",
      "value": 1
    },
    {
      "source": "IfcAnnotationTextOccurrence",
      "target": "IfcAnnotationOccurrence",
      "value": 1
    },
    {
      "source": "IfcApplication",
      "target": "IfcOrganization",
      "value": 1
    },
    {
      "source": "IfcApplication",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcApplication",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcApplication",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcAppliedValueRelationship",
      "target": "IfcAppliedValue",
      "value": 1
    },
    {
      "source": "IfcAppliedValueRelationship",
      "target": "IfcArithmeticOperatorEnum",
      "value": 1
    },
    {
      "source": "IfcApproval",
      "target": "IfcDateTimeSelect",
      "value": 1
    },
    {
      "source": "IfcApproval",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcApproval",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcApprovalActorRelationship",
      "target": "IfcActorSelect",
      "value": 1
    },
    {
      "source": "IfcApprovalActorRelationship",
      "target": "IfcApproval",
      "value": 1
    },
    {
      "source": "IfcApprovalActorRelationship",
      "target": "IfcActorRole",
      "value": 1
    },
    {
      "source": "IfcApprovalPropertyRelationship",
      "target": "IfcApproval",
      "value": 1
    },
    {
      "source": "IfcApprovalRelationship",
      "target": "IfcApproval",
      "value": 1
    },
    {
      "source": "IfcApprovalRelationship",
      "target": "IfcApproval",
      "value": 1
    },
    {
      "source": "IfcApprovalRelationship",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcArbitraryClosedProfileDef",
      "target": "IfcProfileDef",
      "value": 1
    },
    {
      "source": "IfcArbitraryClosedProfileDef",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcArbitraryOpenProfileDef",
      "target": "IfcProfileDef",
      "value": 1
    },
    {
      "source": "IfcArbitraryOpenProfileDef",
      "target": "IfcBoundedCurve",
      "value": 1
    },
    {
      "source": "IfcArbitraryProfileDefWithVoids",
      "target": "IfcArbitraryClosedProfileDef",
      "value": 1
    },
    {
      "source": "IfcAsset",
      "target": "IfcGroup",
      "value": 1
    },
    {
      "source": "IfcAsset",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcAsset",
      "target": "IfcCostValue",
      "value": 1
    },
    {
      "source": "IfcAsset",
      "target": "IfcCostValue",
      "value": 1
    },
    {
      "source": "IfcAsset",
      "target": "IfcCostValue",
      "value": 1
    },
    {
      "source": "IfcAsset",
      "target": "IfcActorSelect",
      "value": 1
    },
    {
      "source": "IfcAsset",
      "target": "IfcActorSelect",
      "value": 1
    },
    {
      "source": "IfcAsset",
      "target": "IfcPerson",
      "value": 1
    },
    {
      "source": "IfcAsset",
      "target": "IfcCalendarDate",
      "value": 1
    },
    {
      "source": "IfcAsset",
      "target": "IfcCostValue",
      "value": 1
    },
    {
      "source": "IfcAsymmetricIShapeProfileDef",
      "target": "IfcIShapeProfileDef",
      "value": 1
    },
    {
      "source": "IfcAsymmetricIShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcAxis1Placement",
      "target": "IfcPlacement",
      "value": 1
    },
    {
      "source": "IfcAxis2Placement2D",
      "target": "IfcPlacement",
      "value": 1
    },
    {
      "source": "IfcAxis2Placement3D",
      "target": "IfcPlacement",
      "value": 1
    },
    {
      "source": "IfcBSplineCurve",
      "target": "IfcBoundedCurve",
      "value": 1
    },
    {
      "source": "IfcBSplineCurve",
      "target": "IfcBSplineCurveForm",
      "value": 1
    },
    {
      "source": "IfcBeam",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcBeamType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcBeamType",
      "target": "IfcBeamTypeEnum",
      "value": 1
    },
    {
      "source": "IfcBezierCurve",
      "target": "IfcBSplineCurve",
      "value": 1
    },
    {
      "source": "IfcBlobTexture",
      "target": "IfcSurfaceTexture",
      "value": 1
    },
    {
      "source": "IfcBlobTexture",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcBlock",
      "target": "IfcCsgPrimitive3D",
      "value": 1
    },
    {
      "source": "IfcBlock",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcBlock",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcBlock",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcBoilerType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcBoilerType",
      "target": "IfcBoilerTypeEnum",
      "value": 1
    },
    {
      "source": "IfcBooleanClippingResult",
      "target": "IfcBooleanResult",
      "value": 1
    },
    {
      "source": "IfcBooleanResult",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcBooleanResult",
      "target": "IfcBooleanOperator",
      "value": 1
    },
    {
      "source": "IfcBooleanResult",
      "target": "IfcBooleanOperand",
      "value": 1
    },
    {
      "source": "IfcBooleanResult",
      "target": "IfcBooleanOperand",
      "value": 1
    },
    {
      "source": "IfcBoundaryEdgeCondition",
      "target": "IfcBoundaryCondition",
      "value": 1
    },
    {
      "source": "IfcBoundaryFaceCondition",
      "target": "IfcBoundaryCondition",
      "value": 1
    },
    {
      "source": "IfcBoundaryNodeCondition",
      "target": "IfcBoundaryCondition",
      "value": 1
    },
    {
      "source": "IfcBoundaryNodeConditionWarping",
      "target": "IfcBoundaryNodeCondition",
      "value": 1
    },
    {
      "source": "IfcBoundedCurve",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcBoundedSurface",
      "target": "IfcSurface",
      "value": 1
    },
    {
      "source": "IfcBoundingBox",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcBoundingBox",
      "target": "IfcCartesianPoint",
      "value": 1
    },
    {
      "source": "IfcBoundingBox",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcBoundingBox",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcBoundingBox",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcBoxedHalfSpace",
      "target": "IfcHalfSpaceSolid",
      "value": 1
    },
    {
      "source": "IfcBoxedHalfSpace",
      "target": "IfcBoundingBox",
      "value": 1
    },
    {
      "source": "IfcBuilding",
      "target": "IfcSpatialStructureElement",
      "value": 1
    },
    {
      "source": "IfcBuildingElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcBuildingElementComponent",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcBuildingElementPart",
      "target": "IfcBuildingElementComponent",
      "value": 1
    },
    {
      "source": "IfcBuildingElementProxy",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcBuildingElementProxyType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcBuildingElementProxyType",
      "target": "IfcBuildingElementProxyTypeEnum",
      "value": 1
    },
    {
      "source": "IfcBuildingElementType",
      "target": "IfcElementType",
      "value": 1
    },
    {
      "source": "IfcBuildingStorey",
      "target": "IfcSpatialStructureElement",
      "value": 1
    },
    {
      "source": "IfcCShapeProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcCShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCableCarrierFittingType",
      "target": "IfcFlowFittingType",
      "value": 1
    },
    {
      "source": "IfcCableCarrierFittingType",
      "target": "IfcCableCarrierFittingTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCableCarrierSegmentType",
      "target": "IfcFlowSegmentType",
      "value": 1
    },
    {
      "source": "IfcCableCarrierSegmentType",
      "target": "IfcCableCarrierSegmentTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCableSegmentType",
      "target": "IfcFlowSegmentType",
      "value": 1
    },
    {
      "source": "IfcCableSegmentType",
      "target": "IfcCableSegmentTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCalendarDate",
      "target": "IfcDayInMonthNumber",
      "value": 1
    },
    {
      "source": "IfcCalendarDate",
      "target": "IfcMonthInYearNumber",
      "value": 1
    },
    {
      "source": "IfcCalendarDate",
      "target": "IfcYearNumber",
      "value": 1
    },
    {
      "source": "IfcCartesianPoint",
      "target": "IfcPoint",
      "value": 1
    },
    {
      "source": "IfcCartesianTransformationOperator",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcCartesianTransformationOperator",
      "target": "IfcCartesianPoint",
      "value": 1
    },
    {
      "source": "IfcCartesianTransformationOperator2D",
      "target": "IfcCartesianTransformationOperator",
      "value": 1
    },
    {
      "source": "IfcCartesianTransformationOperator2DnonUniform",
      "target": "IfcCartesianTransformationOperator2D",
      "value": 1
    },
    {
      "source": "IfcCartesianTransformationOperator3D",
      "target": "IfcCartesianTransformationOperator",
      "value": 1
    },
    {
      "source": "IfcCartesianTransformationOperator3DnonUniform",
      "target": "IfcCartesianTransformationOperator3D",
      "value": 1
    },
    {
      "source": "IfcCenterLineProfileDef",
      "target": "IfcArbitraryOpenProfileDef",
      "value": 1
    },
    {
      "source": "IfcCenterLineProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcChamferEdgeFeature",
      "target": "IfcEdgeFeature",
      "value": 1
    },
    {
      "source": "IfcChillerType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcChillerType",
      "target": "IfcChillerTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCircle",
      "target": "IfcConic",
      "value": 1
    },
    {
      "source": "IfcCircle",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCircleHollowProfileDef",
      "target": "IfcCircleProfileDef",
      "value": 1
    },
    {
      "source": "IfcCircleHollowProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCircleProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcCircleProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcClassification",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcClassification",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcClassification",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcClassificationItem",
      "target": "IfcClassificationNotationFacet",
      "value": 1
    },
    {
      "source": "IfcClassificationItem",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcClassificationItemRelationship",
      "target": "IfcClassificationItem",
      "value": 1
    },
    {
      "source": "IfcClassificationNotationFacet",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcClassificationReference",
      "target": "IfcExternalReference",
      "value": 1
    },
    {
      "source": "IfcClosedShell",
      "target": "IfcConnectedFaceSet",
      "value": 1
    },
    {
      "source": "IfcCoilType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcCoilType",
      "target": "IfcCoilTypeEnum",
      "value": 1
    },
    {
      "source": "IfcColourRgb",
      "target": "IfcColourSpecification",
      "value": 1
    },
    {
      "source": "IfcColourRgb",
      "target": "IfcNormalisedRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcColourRgb",
      "target": "IfcNormalisedRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcColourRgb",
      "target": "IfcNormalisedRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcColumn",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcColumnType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcColumnType",
      "target": "IfcColumnTypeEnum",
      "value": 1
    },
    {
      "source": "IfcComplexProperty",
      "target": "IfcProperty",
      "value": 1
    },
    {
      "source": "IfcComplexProperty",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcCompositeCurve",
      "target": "IfcBoundedCurve",
      "value": 1
    },
    {
      "source": "IfcCompositeCurveSegment",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcCompositeCurveSegment",
      "target": "IfcTransitionCode",
      "value": 1
    },
    {
      "source": "IfcCompositeCurveSegment",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcCompositeProfileDef",
      "target": "IfcProfileDef",
      "value": 1
    },
    {
      "source": "IfcCompressorType",
      "target": "IfcFlowMovingDeviceType",
      "value": 1
    },
    {
      "source": "IfcCompressorType",
      "target": "IfcCompressorTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCondenserType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcCondenserType",
      "target": "IfcCondenserTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCondition",
      "target": "IfcGroup",
      "value": 1
    },
    {
      "source": "IfcConditionCriterion",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcConditionCriterion",
      "target": "IfcConditionCriterionSelect",
      "value": 1
    },
    {
      "source": "IfcConditionCriterion",
      "target": "IfcDateTimeSelect",
      "value": 1
    },
    {
      "source": "IfcConic",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcConic",
      "target": "IfcAxis2Placement",
      "value": 1
    },
    {
      "source": "IfcConnectedFaceSet",
      "target": "IfcTopologicalRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcConnectionCurveGeometry",
      "target": "IfcConnectionGeometry",
      "value": 1
    },
    {
      "source": "IfcConnectionCurveGeometry",
      "target": "IfcCurveOrEdgeCurve",
      "value": 1
    },
    {
      "source": "IfcConnectionPointEccentricity",
      "target": "IfcConnectionPointGeometry",
      "value": 1
    },
    {
      "source": "IfcConnectionPointGeometry",
      "target": "IfcConnectionGeometry",
      "value": 1
    },
    {
      "source": "IfcConnectionPointGeometry",
      "target": "IfcPointOrVertexPoint",
      "value": 1
    },
    {
      "source": "IfcConnectionPortGeometry",
      "target": "IfcConnectionGeometry",
      "value": 1
    },
    {
      "source": "IfcConnectionPortGeometry",
      "target": "IfcAxis2Placement",
      "value": 1
    },
    {
      "source": "IfcConnectionPortGeometry",
      "target": "IfcProfileDef",
      "value": 1
    },
    {
      "source": "IfcConnectionSurfaceGeometry",
      "target": "IfcConnectionGeometry",
      "value": 1
    },
    {
      "source": "IfcConnectionSurfaceGeometry",
      "target": "IfcSurfaceOrFaceSurface",
      "value": 1
    },
    {
      "source": "IfcConstraint",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcConstraint",
      "target": "IfcConstraintEnum",
      "value": 1
    },
    {
      "source": "IfcConstraintAggregationRelationship",
      "target": "IfcConstraint",
      "value": 1
    },
    {
      "source": "IfcConstraintAggregationRelationship",
      "target": "IfcLogicalOperatorEnum",
      "value": 1
    },
    {
      "source": "IfcConstraintClassificationRelationship",
      "target": "IfcConstraint",
      "value": 1
    },
    {
      "source": "IfcConstraintRelationship",
      "target": "IfcConstraint",
      "value": 1
    },
    {
      "source": "IfcConstructionEquipmentResource",
      "target": "IfcConstructionResource",
      "value": 1
    },
    {
      "source": "IfcConstructionMaterialResource",
      "target": "IfcConstructionResource",
      "value": 1
    },
    {
      "source": "IfcConstructionProductResource",
      "target": "IfcConstructionResource",
      "value": 1
    },
    {
      "source": "IfcConstructionResource",
      "target": "IfcResource",
      "value": 1
    },
    {
      "source": "IfcContextDependentUnit",
      "target": "IfcNamedUnit",
      "value": 1
    },
    {
      "source": "IfcContextDependentUnit",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcControl",
      "target": "IfcObject",
      "value": 1
    },
    {
      "source": "IfcControllerType",
      "target": "IfcDistributionControlElementType",
      "value": 1
    },
    {
      "source": "IfcControllerType",
      "target": "IfcControllerTypeEnum",
      "value": 1
    },
    {
      "source": "IfcConversionBasedUnit",
      "target": "IfcNamedUnit",
      "value": 1
    },
    {
      "source": "IfcConversionBasedUnit",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcConversionBasedUnit",
      "target": "IfcMeasureWithUnit",
      "value": 1
    },
    {
      "source": "IfcCooledBeamType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcCooledBeamType",
      "target": "IfcCooledBeamTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCoolingTowerType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcCoolingTowerType",
      "target": "IfcCoolingTowerTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCoordinatedUniversalTimeOffset",
      "target": "IfcHourInDay",
      "value": 1
    },
    {
      "source": "IfcCoordinatedUniversalTimeOffset",
      "target": "IfcAheadOrBehind",
      "value": 1
    },
    {
      "source": "IfcCostItem",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcCostSchedule",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcCostSchedule",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcCostSchedule",
      "target": "IfcCostScheduleTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCostValue",
      "target": "IfcAppliedValue",
      "value": 1
    },
    {
      "source": "IfcCostValue",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcCovering",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcCoveringType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcCoveringType",
      "target": "IfcCoveringTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailAShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailFShapeProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcCraneRailFShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailFShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailFShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailFShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailFShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailFShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCraneRailFShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCrewResource",
      "target": "IfcConstructionResource",
      "value": 1
    },
    {
      "source": "IfcCsgPrimitive3D",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcCsgPrimitive3D",
      "target": "IfcAxis2Placement3D",
      "value": 1
    },
    {
      "source": "IfcCsgSolid",
      "target": "IfcSolidModel",
      "value": 1
    },
    {
      "source": "IfcCsgSolid",
      "target": "IfcCsgSelect",
      "value": 1
    },
    {
      "source": "IfcCurrencyRelationship",
      "target": "IfcMonetaryUnit",
      "value": 1
    },
    {
      "source": "IfcCurrencyRelationship",
      "target": "IfcMonetaryUnit",
      "value": 1
    },
    {
      "source": "IfcCurrencyRelationship",
      "target": "IfcPositiveRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcCurrencyRelationship",
      "target": "IfcDateAndTime",
      "value": 1
    },
    {
      "source": "IfcCurtainWall",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcCurtainWallType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcCurtainWallType",
      "target": "IfcCurtainWallTypeEnum",
      "value": 1
    },
    {
      "source": "IfcCurve",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcCurveBoundedPlane",
      "target": "IfcBoundedSurface",
      "value": 1
    },
    {
      "source": "IfcCurveBoundedPlane",
      "target": "IfcPlane",
      "value": 1
    },
    {
      "source": "IfcCurveBoundedPlane",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcCurveStyle",
      "target": "IfcPresentationStyle",
      "value": 1
    },
    {
      "source": "IfcCurveStyleFontAndScaling",
      "target": "IfcCurveStyleFontSelect",
      "value": 1
    },
    {
      "source": "IfcCurveStyleFontAndScaling",
      "target": "IfcPositiveRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcCurveStyleFontPattern",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcCurveStyleFontPattern",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcDamperType",
      "target": "IfcFlowControllerType",
      "value": 1
    },
    {
      "source": "IfcDamperType",
      "target": "IfcDamperTypeEnum",
      "value": 1
    },
    {
      "source": "IfcDateAndTime",
      "target": "IfcCalendarDate",
      "value": 1
    },
    {
      "source": "IfcDateAndTime",
      "target": "IfcLocalTime",
      "value": 1
    },
    {
      "source": "IfcDefinedSymbol",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcDefinedSymbol",
      "target": "IfcDefinedSymbolSelect",
      "value": 1
    },
    {
      "source": "IfcDefinedSymbol",
      "target": "IfcCartesianTransformationOperator2D",
      "value": 1
    },
    {
      "source": "IfcDerivedProfileDef",
      "target": "IfcProfileDef",
      "value": 1
    },
    {
      "source": "IfcDerivedProfileDef",
      "target": "IfcProfileDef",
      "value": 1
    },
    {
      "source": "IfcDerivedProfileDef",
      "target": "IfcCartesianTransformationOperator2D",
      "value": 1
    },
    {
      "source": "IfcDerivedUnit",
      "target": "IfcDerivedUnitEnum",
      "value": 1
    },
    {
      "source": "IfcDerivedUnitElement",
      "target": "IfcNamedUnit",
      "value": 1
    },
    {
      "source": "IfcDiameterDimension",
      "target": "IfcDimensionCurveDirectedCallout",
      "value": 1
    },
    {
      "source": "IfcDimensionCalloutRelationship",
      "target": "IfcDraughtingCalloutRelationship",
      "value": 1
    },
    {
      "source": "IfcDimensionCurve",
      "target": "IfcAnnotationCurveOccurrence",
      "value": 1
    },
    {
      "source": "IfcDimensionCurveDirectedCallout",
      "target": "IfcDraughtingCallout",
      "value": 1
    },
    {
      "source": "IfcDimensionCurveTerminator",
      "target": "IfcTerminatorSymbol",
      "value": 1
    },
    {
      "source": "IfcDimensionCurveTerminator",
      "target": "IfcDimensionExtentUsage",
      "value": 1
    },
    {
      "source": "IfcDimensionPair",
      "target": "IfcDraughtingCalloutRelationship",
      "value": 1
    },
    {
      "source": "IfcDirection",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcDiscreteAccessory",
      "target": "IfcElementComponent",
      "value": 1
    },
    {
      "source": "IfcDiscreteAccessoryType",
      "target": "IfcElementComponentType",
      "value": 1
    },
    {
      "source": "IfcDistributionChamberElement",
      "target": "IfcDistributionFlowElement",
      "value": 1
    },
    {
      "source": "IfcDistributionChamberElementType",
      "target": "IfcDistributionFlowElementType",
      "value": 1
    },
    {
      "source": "IfcDistributionChamberElementType",
      "target": "IfcDistributionChamberElementTypeEnum",
      "value": 1
    },
    {
      "source": "IfcDistributionControlElement",
      "target": "IfcDistributionElement",
      "value": 1
    },
    {
      "source": "IfcDistributionControlElementType",
      "target": "IfcDistributionElementType",
      "value": 1
    },
    {
      "source": "IfcDistributionElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcDistributionElementType",
      "target": "IfcElementType",
      "value": 1
    },
    {
      "source": "IfcDistributionFlowElement",
      "target": "IfcDistributionElement",
      "value": 1
    },
    {
      "source": "IfcDistributionFlowElementType",
      "target": "IfcDistributionElementType",
      "value": 1
    },
    {
      "source": "IfcDistributionPort",
      "target": "IfcPort",
      "value": 1
    },
    {
      "source": "IfcDocumentInformation",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcDocumentInformation",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcDocumentInformationRelationship",
      "target": "IfcDocumentInformation",
      "value": 1
    },
    {
      "source": "IfcDocumentReference",
      "target": "IfcExternalReference",
      "value": 1
    },
    {
      "source": "IfcDoor",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcDoorLiningProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcDoorPanelProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcDoorPanelProperties",
      "target": "IfcDoorPanelOperationEnum",
      "value": 1
    },
    {
      "source": "IfcDoorPanelProperties",
      "target": "IfcDoorPanelPositionEnum",
      "value": 1
    },
    {
      "source": "IfcDoorStyle",
      "target": "IfcTypeProduct",
      "value": 1
    },
    {
      "source": "IfcDoorStyle",
      "target": "IfcDoorStyleOperationEnum",
      "value": 1
    },
    {
      "source": "IfcDoorStyle",
      "target": "IfcDoorStyleConstructionEnum",
      "value": 1
    },
    {
      "source": "IfcDraughtingCallout",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcDraughtingCalloutRelationship",
      "target": "IfcDraughtingCallout",
      "value": 1
    },
    {
      "source": "IfcDraughtingCalloutRelationship",
      "target": "IfcDraughtingCallout",
      "value": 1
    },
    {
      "source": "IfcDraughtingPreDefinedColour",
      "target": "IfcPreDefinedColour",
      "value": 1
    },
    {
      "source": "IfcDraughtingPreDefinedCurveFont",
      "target": "IfcPreDefinedCurveFont",
      "value": 1
    },
    {
      "source": "IfcDraughtingPreDefinedTextFont",
      "target": "IfcPreDefinedTextFont",
      "value": 1
    },
    {
      "source": "IfcDuctFittingType",
      "target": "IfcFlowFittingType",
      "value": 1
    },
    {
      "source": "IfcDuctFittingType",
      "target": "IfcDuctFittingTypeEnum",
      "value": 1
    },
    {
      "source": "IfcDuctSegmentType",
      "target": "IfcFlowSegmentType",
      "value": 1
    },
    {
      "source": "IfcDuctSegmentType",
      "target": "IfcDuctSegmentTypeEnum",
      "value": 1
    },
    {
      "source": "IfcDuctSilencerType",
      "target": "IfcFlowTreatmentDeviceType",
      "value": 1
    },
    {
      "source": "IfcDuctSilencerType",
      "target": "IfcDuctSilencerTypeEnum",
      "value": 1
    },
    {
      "source": "IfcEdge",
      "target": "IfcTopologicalRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcEdge",
      "target": "IfcVertex",
      "value": 1
    },
    {
      "source": "IfcEdge",
      "target": "IfcVertex",
      "value": 1
    },
    {
      "source": "IfcEdgeCurve",
      "target": "IfcEdge",
      "value": 1
    },
    {
      "source": "IfcEdgeCurve",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcEdgeFeature",
      "target": "IfcFeatureElementSubtraction",
      "value": 1
    },
    {
      "source": "IfcEdgeLoop",
      "target": "IfcLoop",
      "value": 1
    },
    {
      "source": "IfcElectricApplianceType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcElectricApplianceType",
      "target": "IfcElectricApplianceTypeEnum",
      "value": 1
    },
    {
      "source": "IfcElectricDistributionPoint",
      "target": "IfcFlowController",
      "value": 1
    },
    {
      "source": "IfcElectricDistributionPoint",
      "target": "IfcElectricDistributionPointFunctionEnum",
      "value": 1
    },
    {
      "source": "IfcElectricFlowStorageDeviceType",
      "target": "IfcFlowStorageDeviceType",
      "value": 1
    },
    {
      "source": "IfcElectricFlowStorageDeviceType",
      "target": "IfcElectricFlowStorageDeviceTypeEnum",
      "value": 1
    },
    {
      "source": "IfcElectricGeneratorType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcElectricGeneratorType",
      "target": "IfcElectricGeneratorTypeEnum",
      "value": 1
    },
    {
      "source": "IfcElectricHeaterType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcElectricHeaterType",
      "target": "IfcElectricHeaterTypeEnum",
      "value": 1
    },
    {
      "source": "IfcElectricMotorType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcElectricMotorType",
      "target": "IfcElectricMotorTypeEnum",
      "value": 1
    },
    {
      "source": "IfcElectricTimeControlType",
      "target": "IfcFlowControllerType",
      "value": 1
    },
    {
      "source": "IfcElectricTimeControlType",
      "target": "IfcElectricTimeControlTypeEnum",
      "value": 1
    },
    {
      "source": "IfcElectricalBaseProperties",
      "target": "IfcEnergyProperties",
      "value": 1
    },
    {
      "source": "IfcElectricalBaseProperties",
      "target": "IfcElectricVoltageMeasure",
      "value": 1
    },
    {
      "source": "IfcElectricalBaseProperties",
      "target": "IfcFrequencyMeasure",
      "value": 1
    },
    {
      "source": "IfcElectricalCircuit",
      "target": "IfcSystem",
      "value": 1
    },
    {
      "source": "IfcElectricalElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcElement",
      "target": "IfcProduct",
      "value": 1
    },
    {
      "source": "IfcElementAssembly",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcElementAssembly",
      "target": "IfcElementAssemblyTypeEnum",
      "value": 1
    },
    {
      "source": "IfcElementComponent",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcElementComponentType",
      "target": "IfcElementType",
      "value": 1
    },
    {
      "source": "IfcElementQuantity",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcElementType",
      "target": "IfcTypeProduct",
      "value": 1
    },
    {
      "source": "IfcElementarySurface",
      "target": "IfcSurface",
      "value": 1
    },
    {
      "source": "IfcElementarySurface",
      "target": "IfcAxis2Placement3D",
      "value": 1
    },
    {
      "source": "IfcEllipse",
      "target": "IfcConic",
      "value": 1
    },
    {
      "source": "IfcEllipse",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcEllipse",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcEllipseProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcEllipseProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcEllipseProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcEnergyConversionDevice",
      "target": "IfcDistributionFlowElement",
      "value": 1
    },
    {
      "source": "IfcEnergyConversionDeviceType",
      "target": "IfcDistributionFlowElementType",
      "value": 1
    },
    {
      "source": "IfcEnergyProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcEnvironmentalImpactValue",
      "target": "IfcAppliedValue",
      "value": 1
    },
    {
      "source": "IfcEnvironmentalImpactValue",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcEnvironmentalImpactValue",
      "target": "IfcEnvironmentalImpactCategoryEnum",
      "value": 1
    },
    {
      "source": "IfcEquipmentElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcEquipmentStandard",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcEvaporativeCoolerType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcEvaporativeCoolerType",
      "target": "IfcEvaporativeCoolerTypeEnum",
      "value": 1
    },
    {
      "source": "IfcEvaporatorType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcEvaporatorType",
      "target": "IfcEvaporatorTypeEnum",
      "value": 1
    },
    {
      "source": "IfcExtendedMaterialProperties",
      "target": "IfcMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcExtendedMaterialProperties",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcExternallyDefinedHatchStyle",
      "target": "IfcExternalReference",
      "value": 1
    },
    {
      "source": "IfcExternallyDefinedSurfaceStyle",
      "target": "IfcExternalReference",
      "value": 1
    },
    {
      "source": "IfcExternallyDefinedSymbol",
      "target": "IfcExternalReference",
      "value": 1
    },
    {
      "source": "IfcExternallyDefinedTextFont",
      "target": "IfcExternalReference",
      "value": 1
    },
    {
      "source": "IfcExtrudedAreaSolid",
      "target": "IfcSweptAreaSolid",
      "value": 1
    },
    {
      "source": "IfcExtrudedAreaSolid",
      "target": "IfcDirection",
      "value": 1
    },
    {
      "source": "IfcExtrudedAreaSolid",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcFace",
      "target": "IfcTopologicalRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcFaceBasedSurfaceModel",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcFaceBound",
      "target": "IfcTopologicalRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcFaceBound",
      "target": "IfcLoop",
      "value": 1
    },
    {
      "source": "IfcFaceOuterBound",
      "target": "IfcFaceBound",
      "value": 1
    },
    {
      "source": "IfcFaceSurface",
      "target": "IfcFace",
      "value": 1
    },
    {
      "source": "IfcFaceSurface",
      "target": "IfcSurface",
      "value": 1
    },
    {
      "source": "IfcFacetedBrep",
      "target": "IfcManifoldSolidBrep",
      "value": 1
    },
    {
      "source": "IfcFacetedBrepWithVoids",
      "target": "IfcManifoldSolidBrep",
      "value": 1
    },
    {
      "source": "IfcFailureConnectionCondition",
      "target": "IfcStructuralConnectionCondition",
      "value": 1
    },
    {
      "source": "IfcFanType",
      "target": "IfcFlowMovingDeviceType",
      "value": 1
    },
    {
      "source": "IfcFanType",
      "target": "IfcFanTypeEnum",
      "value": 1
    },
    {
      "source": "IfcFastener",
      "target": "IfcElementComponent",
      "value": 1
    },
    {
      "source": "IfcFastenerType",
      "target": "IfcElementComponentType",
      "value": 1
    },
    {
      "source": "IfcFeatureElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcFeatureElementAddition",
      "target": "IfcFeatureElement",
      "value": 1
    },
    {
      "source": "IfcFeatureElementSubtraction",
      "target": "IfcFeatureElement",
      "value": 1
    },
    {
      "source": "IfcFillAreaStyle",
      "target": "IfcPresentationStyle",
      "value": 1
    },
    {
      "source": "IfcFillAreaStyleHatching",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcFillAreaStyleHatching",
      "target": "IfcCurveStyle",
      "value": 1
    },
    {
      "source": "IfcFillAreaStyleHatching",
      "target": "IfcHatchLineDistanceSelect",
      "value": 1
    },
    {
      "source": "IfcFillAreaStyleHatching",
      "target": "IfcPlaneAngleMeasure",
      "value": 1
    },
    {
      "source": "IfcFillAreaStyleTileSymbolWithStyle",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcFillAreaStyleTileSymbolWithStyle",
      "target": "IfcAnnotationSymbolOccurrence",
      "value": 1
    },
    {
      "source": "IfcFillAreaStyleTiles",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcFillAreaStyleTiles",
      "target": "IfcOneDirectionRepeatFactor",
      "value": 1
    },
    {
      "source": "IfcFillAreaStyleTiles",
      "target": "IfcPositiveRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcFilterType",
      "target": "IfcFlowTreatmentDeviceType",
      "value": 1
    },
    {
      "source": "IfcFilterType",
      "target": "IfcFilterTypeEnum",
      "value": 1
    },
    {
      "source": "IfcFireSuppressionTerminalType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcFireSuppressionTerminalType",
      "target": "IfcFireSuppressionTerminalTypeEnum",
      "value": 1
    },
    {
      "source": "IfcFlowController",
      "target": "IfcDistributionFlowElement",
      "value": 1
    },
    {
      "source": "IfcFlowControllerType",
      "target": "IfcDistributionFlowElementType",
      "value": 1
    },
    {
      "source": "IfcFlowFitting",
      "target": "IfcDistributionFlowElement",
      "value": 1
    },
    {
      "source": "IfcFlowFittingType",
      "target": "IfcDistributionFlowElementType",
      "value": 1
    },
    {
      "source": "IfcFlowInstrumentType",
      "target": "IfcDistributionControlElementType",
      "value": 1
    },
    {
      "source": "IfcFlowInstrumentType",
      "target": "IfcFlowInstrumentTypeEnum",
      "value": 1
    },
    {
      "source": "IfcFlowMeterType",
      "target": "IfcFlowControllerType",
      "value": 1
    },
    {
      "source": "IfcFlowMeterType",
      "target": "IfcFlowMeterTypeEnum",
      "value": 1
    },
    {
      "source": "IfcFlowMovingDevice",
      "target": "IfcDistributionFlowElement",
      "value": 1
    },
    {
      "source": "IfcFlowMovingDeviceType",
      "target": "IfcDistributionFlowElementType",
      "value": 1
    },
    {
      "source": "IfcFlowSegment",
      "target": "IfcDistributionFlowElement",
      "value": 1
    },
    {
      "source": "IfcFlowSegmentType",
      "target": "IfcDistributionFlowElementType",
      "value": 1
    },
    {
      "source": "IfcFlowStorageDevice",
      "target": "IfcDistributionFlowElement",
      "value": 1
    },
    {
      "source": "IfcFlowStorageDeviceType",
      "target": "IfcDistributionFlowElementType",
      "value": 1
    },
    {
      "source": "IfcFlowTerminal",
      "target": "IfcDistributionFlowElement",
      "value": 1
    },
    {
      "source": "IfcFlowTerminalType",
      "target": "IfcDistributionFlowElementType",
      "value": 1
    },
    {
      "source": "IfcFlowTreatmentDevice",
      "target": "IfcDistributionFlowElement",
      "value": 1
    },
    {
      "source": "IfcFlowTreatmentDeviceType",
      "target": "IfcDistributionFlowElementType",
      "value": 1
    },
    {
      "source": "IfcFluidFlowProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcFluidFlowProperties",
      "target": "IfcPropertySourceEnum",
      "value": 1
    },
    {
      "source": "IfcFluidFlowProperties",
      "target": "IfcMaterial",
      "value": 1
    },
    {
      "source": "IfcFooting",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcFooting",
      "target": "IfcFootingTypeEnum",
      "value": 1
    },
    {
      "source": "IfcFuelProperties",
      "target": "IfcMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcFurnishingElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcFurnishingElementType",
      "target": "IfcElementType",
      "value": 1
    },
    {
      "source": "IfcFurnitureStandard",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcFurnitureType",
      "target": "IfcFurnishingElementType",
      "value": 1
    },
    {
      "source": "IfcFurnitureType",
      "target": "IfcAssemblyPlaceEnum",
      "value": 1
    },
    {
      "source": "IfcGasTerminalType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcGasTerminalType",
      "target": "IfcGasTerminalTypeEnum",
      "value": 1
    },
    {
      "source": "IfcGeneralMaterialProperties",
      "target": "IfcMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcGeneralProfileProperties",
      "target": "IfcProfileProperties",
      "value": 1
    },
    {
      "source": "IfcGeometricCurveSet",
      "target": "IfcGeometricSet",
      "value": 1
    },
    {
      "source": "IfcGeometricRepresentationContext",
      "target": "IfcRepresentationContext",
      "value": 1
    },
    {
      "source": "IfcGeometricRepresentationContext",
      "target": "IfcDimensionCount",
      "value": 1
    },
    {
      "source": "IfcGeometricRepresentationContext",
      "target": "IfcAxis2Placement",
      "value": 1
    },
    {
      "source": "IfcGeometricRepresentationItem",
      "target": "IfcRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcGeometricRepresentationSubContext",
      "target": "IfcGeometricRepresentationContext",
      "value": 1
    },
    {
      "source": "IfcGeometricRepresentationSubContext",
      "target": "IfcGeometricRepresentationContext",
      "value": 1
    },
    {
      "source": "IfcGeometricRepresentationSubContext",
      "target": "IfcGeometricProjectionEnum",
      "value": 1
    },
    {
      "source": "IfcGeometricSet",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcGrid",
      "target": "IfcProduct",
      "value": 1
    },
    {
      "source": "IfcGridAxis",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcGridAxis",
      "target": "IfcBoolean",
      "value": 1
    },
    {
      "source": "IfcGridPlacement",
      "target": "IfcObjectPlacement",
      "value": 1
    },
    {
      "source": "IfcGridPlacement",
      "target": "IfcVirtualGridIntersection",
      "value": 1
    },
    {
      "source": "IfcGroup",
      "target": "IfcObject",
      "value": 1
    },
    {
      "source": "IfcHalfSpaceSolid",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcHalfSpaceSolid",
      "target": "IfcSurface",
      "value": 1
    },
    {
      "source": "IfcHeatExchangerType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcHeatExchangerType",
      "target": "IfcHeatExchangerTypeEnum",
      "value": 1
    },
    {
      "source": "IfcHumidifierType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcHumidifierType",
      "target": "IfcHumidifierTypeEnum",
      "value": 1
    },
    {
      "source": "IfcHygroscopicMaterialProperties",
      "target": "IfcMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcIShapeProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcIShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcIShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcIShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcIShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcImageTexture",
      "target": "IfcSurfaceTexture",
      "value": 1
    },
    {
      "source": "IfcImageTexture",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcInventory",
      "target": "IfcGroup",
      "value": 1
    },
    {
      "source": "IfcInventory",
      "target": "IfcInventoryTypeEnum",
      "value": 1
    },
    {
      "source": "IfcInventory",
      "target": "IfcActorSelect",
      "value": 1
    },
    {
      "source": "IfcInventory",
      "target": "IfcCalendarDate",
      "value": 1
    },
    {
      "source": "IfcIrregularTimeSeries",
      "target": "IfcTimeSeries",
      "value": 1
    },
    {
      "source": "IfcIrregularTimeSeriesValue",
      "target": "IfcDateTimeSelect",
      "value": 1
    },
    {
      "source": "IfcJunctionBoxType",
      "target": "IfcFlowFittingType",
      "value": 1
    },
    {
      "source": "IfcJunctionBoxType",
      "target": "IfcJunctionBoxTypeEnum",
      "value": 1
    },
    {
      "source": "IfcLShapeProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcLShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcLShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcLaborResource",
      "target": "IfcConstructionResource",
      "value": 1
    },
    {
      "source": "IfcLampType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcLampType",
      "target": "IfcLampTypeEnum",
      "value": 1
    },
    {
      "source": "IfcLibraryInformation",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcLibraryReference",
      "target": "IfcExternalReference",
      "value": 1
    },
    {
      "source": "IfcLightDistributionData",
      "target": "IfcPlaneAngleMeasure",
      "value": 1
    },
    {
      "source": "IfcLightFixtureType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcLightFixtureType",
      "target": "IfcLightFixtureTypeEnum",
      "value": 1
    },
    {
      "source": "IfcLightIntensityDistribution",
      "target": "IfcLightDistributionCurveEnum",
      "value": 1
    },
    {
      "source": "IfcLightSource",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcLightSource",
      "target": "IfcColourRgb",
      "value": 1
    },
    {
      "source": "IfcLightSourceAmbient",
      "target": "IfcLightSource",
      "value": 1
    },
    {
      "source": "IfcLightSourceDirectional",
      "target": "IfcLightSource",
      "value": 1
    },
    {
      "source": "IfcLightSourceDirectional",
      "target": "IfcDirection",
      "value": 1
    },
    {
      "source": "IfcLightSourceGoniometric",
      "target": "IfcLightSource",
      "value": 1
    },
    {
      "source": "IfcLightSourceGoniometric",
      "target": "IfcAxis2Placement3D",
      "value": 1
    },
    {
      "source": "IfcLightSourceGoniometric",
      "target": "IfcThermodynamicTemperatureMeasure",
      "value": 1
    },
    {
      "source": "IfcLightSourceGoniometric",
      "target": "IfcLuminousFluxMeasure",
      "value": 1
    },
    {
      "source": "IfcLightSourceGoniometric",
      "target": "IfcLightEmissionSourceEnum",
      "value": 1
    },
    {
      "source": "IfcLightSourceGoniometric",
      "target": "IfcLightDistributionDataSourceSelect",
      "value": 1
    },
    {
      "source": "IfcLightSourcePositional",
      "target": "IfcLightSource",
      "value": 1
    },
    {
      "source": "IfcLightSourcePositional",
      "target": "IfcCartesianPoint",
      "value": 1
    },
    {
      "source": "IfcLightSourcePositional",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcLightSourcePositional",
      "target": "IfcReal",
      "value": 1
    },
    {
      "source": "IfcLightSourcePositional",
      "target": "IfcReal",
      "value": 1
    },
    {
      "source": "IfcLightSourcePositional",
      "target": "IfcReal",
      "value": 1
    },
    {
      "source": "IfcLightSourceSpot",
      "target": "IfcLightSourcePositional",
      "value": 1
    },
    {
      "source": "IfcLightSourceSpot",
      "target": "IfcDirection",
      "value": 1
    },
    {
      "source": "IfcLightSourceSpot",
      "target": "IfcPositivePlaneAngleMeasure",
      "value": 1
    },
    {
      "source": "IfcLightSourceSpot",
      "target": "IfcPositivePlaneAngleMeasure",
      "value": 1
    },
    {
      "source": "IfcLine",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcLine",
      "target": "IfcCartesianPoint",
      "value": 1
    },
    {
      "source": "IfcLine",
      "target": "IfcVector",
      "value": 1
    },
    {
      "source": "IfcLinearDimension",
      "target": "IfcDimensionCurveDirectedCallout",
      "value": 1
    },
    {
      "source": "IfcLocalPlacement",
      "target": "IfcObjectPlacement",
      "value": 1
    },
    {
      "source": "IfcLocalPlacement",
      "target": "IfcAxis2Placement",
      "value": 1
    },
    {
      "source": "IfcLocalTime",
      "target": "IfcHourInDay",
      "value": 1
    },
    {
      "source": "IfcLoop",
      "target": "IfcTopologicalRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcManifoldSolidBrep",
      "target": "IfcSolidModel",
      "value": 1
    },
    {
      "source": "IfcManifoldSolidBrep",
      "target": "IfcClosedShell",
      "value": 1
    },
    {
      "source": "IfcMappedItem",
      "target": "IfcRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcMappedItem",
      "target": "IfcRepresentationMap",
      "value": 1
    },
    {
      "source": "IfcMappedItem",
      "target": "IfcCartesianTransformationOperator",
      "value": 1
    },
    {
      "source": "IfcMaterial",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcMaterialClassificationRelationship",
      "target": "IfcMaterial",
      "value": 1
    },
    {
      "source": "IfcMaterialDefinitionRepresentation",
      "target": "IfcProductRepresentation",
      "value": 1
    },
    {
      "source": "IfcMaterialDefinitionRepresentation",
      "target": "IfcMaterial",
      "value": 1
    },
    {
      "source": "IfcMaterialLayer",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcMaterialLayerSetUsage",
      "target": "IfcMaterialLayerSet",
      "value": 1
    },
    {
      "source": "IfcMaterialLayerSetUsage",
      "target": "IfcLayerSetDirectionEnum",
      "value": 1
    },
    {
      "source": "IfcMaterialLayerSetUsage",
      "target": "IfcDirectionSenseEnum",
      "value": 1
    },
    {
      "source": "IfcMaterialLayerSetUsage",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcMaterialProperties",
      "target": "IfcMaterial",
      "value": 1
    },
    {
      "source": "IfcMeasureWithUnit",
      "target": "IfcValue",
      "value": 1
    },
    {
      "source": "IfcMeasureWithUnit",
      "target": "IfcUnit",
      "value": 1
    },
    {
      "source": "IfcMechanicalConcreteMaterialProperties",
      "target": "IfcMechanicalMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcMechanicalFastener",
      "target": "IfcFastener",
      "value": 1
    },
    {
      "source": "IfcMechanicalFastenerType",
      "target": "IfcFastenerType",
      "value": 1
    },
    {
      "source": "IfcMechanicalMaterialProperties",
      "target": "IfcMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcMechanicalSteelMaterialProperties",
      "target": "IfcMechanicalMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcMember",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcMemberType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcMemberType",
      "target": "IfcMemberTypeEnum",
      "value": 1
    },
    {
      "source": "IfcMetric",
      "target": "IfcConstraint",
      "value": 1
    },
    {
      "source": "IfcMetric",
      "target": "IfcBenchmarkEnum",
      "value": 1
    },
    {
      "source": "IfcMetric",
      "target": "IfcMetricValueSelect",
      "value": 1
    },
    {
      "source": "IfcMonetaryUnit",
      "target": "IfcCurrencyEnum",
      "value": 1
    },
    {
      "source": "IfcMotorConnectionType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcMotorConnectionType",
      "target": "IfcMotorConnectionTypeEnum",
      "value": 1
    },
    {
      "source": "IfcMove",
      "target": "IfcTask",
      "value": 1
    },
    {
      "source": "IfcMove",
      "target": "IfcSpatialStructureElement",
      "value": 1
    },
    {
      "source": "IfcMove",
      "target": "IfcSpatialStructureElement",
      "value": 1
    },
    {
      "source": "IfcNamedUnit",
      "target": "IfcDimensionalExponents",
      "value": 1
    },
    {
      "source": "IfcNamedUnit",
      "target": "IfcUnitEnum",
      "value": 1
    },
    {
      "source": "IfcObject",
      "target": "IfcObjectDefinition",
      "value": 1
    },
    {
      "source": "IfcObjectDefinition",
      "target": "IfcRoot",
      "value": 1
    },
    {
      "source": "IfcObjective",
      "target": "IfcConstraint",
      "value": 1
    },
    {
      "source": "IfcObjective",
      "target": "IfcObjectiveEnum",
      "value": 1
    },
    {
      "source": "IfcOccupant",
      "target": "IfcActor",
      "value": 1
    },
    {
      "source": "IfcOccupant",
      "target": "IfcOccupantTypeEnum",
      "value": 1
    },
    {
      "source": "IfcOffsetCurve2D",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcOffsetCurve2D",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcOffsetCurve2D",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcOffsetCurve3D",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcOffsetCurve3D",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcOffsetCurve3D",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcOffsetCurve3D",
      "target": "IfcDirection",
      "value": 1
    },
    {
      "source": "IfcOneDirectionRepeatFactor",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcOneDirectionRepeatFactor",
      "target": "IfcVector",
      "value": 1
    },
    {
      "source": "IfcOpenShell",
      "target": "IfcConnectedFaceSet",
      "value": 1
    },
    {
      "source": "IfcOpeningElement",
      "target": "IfcFeatureElementSubtraction",
      "value": 1
    },
    {
      "source": "IfcOpticalMaterialProperties",
      "target": "IfcMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcOrderAction",
      "target": "IfcTask",
      "value": 1
    },
    {
      "source": "IfcOrderAction",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcOrganization",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcOrganizationRelationship",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcOrganizationRelationship",
      "target": "IfcOrganization",
      "value": 1
    },
    {
      "source": "IfcOrientedEdge",
      "target": "IfcEdge",
      "value": 1
    },
    {
      "source": "IfcOrientedEdge",
      "target": "IfcEdge",
      "value": 1
    },
    {
      "source": "IfcOutletType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcOutletType",
      "target": "IfcOutletTypeEnum",
      "value": 1
    },
    {
      "source": "IfcOwnerHistory",
      "target": "IfcPersonAndOrganization",
      "value": 1
    },
    {
      "source": "IfcOwnerHistory",
      "target": "IfcApplication",
      "value": 1
    },
    {
      "source": "IfcOwnerHistory",
      "target": "IfcChangeActionEnum",
      "value": 1
    },
    {
      "source": "IfcOwnerHistory",
      "target": "IfcTimeStamp",
      "value": 1
    },
    {
      "source": "IfcParameterizedProfileDef",
      "target": "IfcProfileDef",
      "value": 1
    },
    {
      "source": "IfcParameterizedProfileDef",
      "target": "IfcAxis2Placement2D",
      "value": 1
    },
    {
      "source": "IfcPath",
      "target": "IfcTopologicalRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcPerformanceHistory",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcPerformanceHistory",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcPermeableCoveringProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcPermeableCoveringProperties",
      "target": "IfcPermeableCoveringOperationEnum",
      "value": 1
    },
    {
      "source": "IfcPermeableCoveringProperties",
      "target": "IfcWindowPanelPositionEnum",
      "value": 1
    },
    {
      "source": "IfcPermit",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcPermit",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcPersonAndOrganization",
      "target": "IfcPerson",
      "value": 1
    },
    {
      "source": "IfcPersonAndOrganization",
      "target": "IfcOrganization",
      "value": 1
    },
    {
      "source": "IfcPhysicalComplexQuantity",
      "target": "IfcPhysicalQuantity",
      "value": 1
    },
    {
      "source": "IfcPhysicalComplexQuantity",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcPhysicalQuantity",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcPhysicalSimpleQuantity",
      "target": "IfcPhysicalQuantity",
      "value": 1
    },
    {
      "source": "IfcPile",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcPile",
      "target": "IfcPileTypeEnum",
      "value": 1
    },
    {
      "source": "IfcPipeFittingType",
      "target": "IfcFlowFittingType",
      "value": 1
    },
    {
      "source": "IfcPipeFittingType",
      "target": "IfcPipeFittingTypeEnum",
      "value": 1
    },
    {
      "source": "IfcPipeSegmentType",
      "target": "IfcFlowSegmentType",
      "value": 1
    },
    {
      "source": "IfcPipeSegmentType",
      "target": "IfcPipeSegmentTypeEnum",
      "value": 1
    },
    {
      "source": "IfcPixelTexture",
      "target": "IfcSurfaceTexture",
      "value": 1
    },
    {
      "source": "IfcPixelTexture",
      "target": "IfcInteger",
      "value": 1
    },
    {
      "source": "IfcPixelTexture",
      "target": "IfcInteger",
      "value": 1
    },
    {
      "source": "IfcPixelTexture",
      "target": "IfcInteger",
      "value": 1
    },
    {
      "source": "IfcPlacement",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcPlacement",
      "target": "IfcCartesianPoint",
      "value": 1
    },
    {
      "source": "IfcPlanarBox",
      "target": "IfcPlanarExtent",
      "value": 1
    },
    {
      "source": "IfcPlanarBox",
      "target": "IfcAxis2Placement",
      "value": 1
    },
    {
      "source": "IfcPlanarExtent",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcPlanarExtent",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcPlanarExtent",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcPlane",
      "target": "IfcElementarySurface",
      "value": 1
    },
    {
      "source": "IfcPlate",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcPlateType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcPlateType",
      "target": "IfcPlateTypeEnum",
      "value": 1
    },
    {
      "source": "IfcPoint",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcPointOnCurve",
      "target": "IfcPoint",
      "value": 1
    },
    {
      "source": "IfcPointOnCurve",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcPointOnCurve",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcPointOnSurface",
      "target": "IfcPoint",
      "value": 1
    },
    {
      "source": "IfcPointOnSurface",
      "target": "IfcSurface",
      "value": 1
    },
    {
      "source": "IfcPointOnSurface",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcPointOnSurface",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcPolyLoop",
      "target": "IfcLoop",
      "value": 1
    },
    {
      "source": "IfcPolygonalBoundedHalfSpace",
      "target": "IfcHalfSpaceSolid",
      "value": 1
    },
    {
      "source": "IfcPolygonalBoundedHalfSpace",
      "target": "IfcAxis2Placement3D",
      "value": 1
    },
    {
      "source": "IfcPolygonalBoundedHalfSpace",
      "target": "IfcBoundedCurve",
      "value": 1
    },
    {
      "source": "IfcPolyline",
      "target": "IfcBoundedCurve",
      "value": 1
    },
    {
      "source": "IfcPort",
      "target": "IfcProduct",
      "value": 1
    },
    {
      "source": "IfcPostalAddress",
      "target": "IfcAddress",
      "value": 1
    },
    {
      "source": "IfcPreDefinedColour",
      "target": "IfcPreDefinedItem",
      "value": 1
    },
    {
      "source": "IfcPreDefinedCurveFont",
      "target": "IfcPreDefinedItem",
      "value": 1
    },
    {
      "source": "IfcPreDefinedDimensionSymbol",
      "target": "IfcPreDefinedSymbol",
      "value": 1
    },
    {
      "source": "IfcPreDefinedItem",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcPreDefinedPointMarkerSymbol",
      "target": "IfcPreDefinedSymbol",
      "value": 1
    },
    {
      "source": "IfcPreDefinedSymbol",
      "target": "IfcPreDefinedItem",
      "value": 1
    },
    {
      "source": "IfcPreDefinedTerminatorSymbol",
      "target": "IfcPreDefinedSymbol",
      "value": 1
    },
    {
      "source": "IfcPreDefinedTextFont",
      "target": "IfcPreDefinedItem",
      "value": 1
    },
    {
      "source": "IfcPresentationLayerAssignment",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcPresentationLayerWithStyle",
      "target": "IfcPresentationLayerAssignment",
      "value": 1
    },
    {
      "source": "IfcProcedure",
      "target": "IfcProcess",
      "value": 1
    },
    {
      "source": "IfcProcedure",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcProcedure",
      "target": "IfcProcedureTypeEnum",
      "value": 1
    },
    {
      "source": "IfcProcess",
      "target": "IfcObject",
      "value": 1
    },
    {
      "source": "IfcProduct",
      "target": "IfcObject",
      "value": 1
    },
    {
      "source": "IfcProductDefinitionShape",
      "target": "IfcProductRepresentation",
      "value": 1
    },
    {
      "source": "IfcProductsOfCombustionProperties",
      "target": "IfcMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcProfileDef",
      "target": "IfcProfileTypeEnum",
      "value": 1
    },
    {
      "source": "IfcProject",
      "target": "IfcObject",
      "value": 1
    },
    {
      "source": "IfcProject",
      "target": "IfcUnitAssignment",
      "value": 1
    },
    {
      "source": "IfcProjectOrder",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcProjectOrder",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcProjectOrder",
      "target": "IfcProjectOrderTypeEnum",
      "value": 1
    },
    {
      "source": "IfcProjectOrderRecord",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcProjectOrderRecord",
      "target": "IfcProjectOrderRecordTypeEnum",
      "value": 1
    },
    {
      "source": "IfcProjectionCurve",
      "target": "IfcAnnotationCurveOccurrence",
      "value": 1
    },
    {
      "source": "IfcProjectionElement",
      "target": "IfcFeatureElementAddition",
      "value": 1
    },
    {
      "source": "IfcProperty",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcPropertyBoundedValue",
      "target": "IfcSimpleProperty",
      "value": 1
    },
    {
      "source": "IfcPropertyConstraintRelationship",
      "target": "IfcConstraint",
      "value": 1
    },
    {
      "source": "IfcPropertyDefinition",
      "target": "IfcRoot",
      "value": 1
    },
    {
      "source": "IfcPropertyDependencyRelationship",
      "target": "IfcProperty",
      "value": 1
    },
    {
      "source": "IfcPropertyDependencyRelationship",
      "target": "IfcProperty",
      "value": 1
    },
    {
      "source": "IfcPropertyEnumeratedValue",
      "target": "IfcSimpleProperty",
      "value": 1
    },
    {
      "source": "IfcPropertyEnumeration",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcPropertyListValue",
      "target": "IfcSimpleProperty",
      "value": 1
    },
    {
      "source": "IfcPropertyReferenceValue",
      "target": "IfcSimpleProperty",
      "value": 1
    },
    {
      "source": "IfcPropertyReferenceValue",
      "target": "IfcObjectReferenceSelect",
      "value": 1
    },
    {
      "source": "IfcPropertySet",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcPropertySetDefinition",
      "target": "IfcPropertyDefinition",
      "value": 1
    },
    {
      "source": "IfcPropertySingleValue",
      "target": "IfcSimpleProperty",
      "value": 1
    },
    {
      "source": "IfcPropertyTableValue",
      "target": "IfcSimpleProperty",
      "value": 1
    },
    {
      "source": "IfcProtectiveDeviceType",
      "target": "IfcFlowControllerType",
      "value": 1
    },
    {
      "source": "IfcProtectiveDeviceType",
      "target": "IfcProtectiveDeviceTypeEnum",
      "value": 1
    },
    {
      "source": "IfcProxy",
      "target": "IfcProduct",
      "value": 1
    },
    {
      "source": "IfcProxy",
      "target": "IfcObjectTypeEnum",
      "value": 1
    },
    {
      "source": "IfcPumpType",
      "target": "IfcFlowMovingDeviceType",
      "value": 1
    },
    {
      "source": "IfcPumpType",
      "target": "IfcPumpTypeEnum",
      "value": 1
    },
    {
      "source": "IfcQuantityArea",
      "target": "IfcPhysicalSimpleQuantity",
      "value": 1
    },
    {
      "source": "IfcQuantityArea",
      "target": "IfcAreaMeasure",
      "value": 1
    },
    {
      "source": "IfcQuantityCount",
      "target": "IfcPhysicalSimpleQuantity",
      "value": 1
    },
    {
      "source": "IfcQuantityCount",
      "target": "IfcCountMeasure",
      "value": 1
    },
    {
      "source": "IfcQuantityLength",
      "target": "IfcPhysicalSimpleQuantity",
      "value": 1
    },
    {
      "source": "IfcQuantityLength",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcQuantityTime",
      "target": "IfcPhysicalSimpleQuantity",
      "value": 1
    },
    {
      "source": "IfcQuantityTime",
      "target": "IfcTimeMeasure",
      "value": 1
    },
    {
      "source": "IfcQuantityVolume",
      "target": "IfcPhysicalSimpleQuantity",
      "value": 1
    },
    {
      "source": "IfcQuantityVolume",
      "target": "IfcVolumeMeasure",
      "value": 1
    },
    {
      "source": "IfcQuantityWeight",
      "target": "IfcPhysicalSimpleQuantity",
      "value": 1
    },
    {
      "source": "IfcQuantityWeight",
      "target": "IfcMassMeasure",
      "value": 1
    },
    {
      "source": "IfcRadiusDimension",
      "target": "IfcDimensionCurveDirectedCallout",
      "value": 1
    },
    {
      "source": "IfcRailing",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcRailingType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcRailingType",
      "target": "IfcRailingTypeEnum",
      "value": 1
    },
    {
      "source": "IfcRamp",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcRamp",
      "target": "IfcRampTypeEnum",
      "value": 1
    },
    {
      "source": "IfcRampFlight",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcRampFlightType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcRampFlightType",
      "target": "IfcRampFlightTypeEnum",
      "value": 1
    },
    {
      "source": "IfcRationalBezierCurve",
      "target": "IfcBezierCurve",
      "value": 1
    },
    {
      "source": "IfcRectangleHollowProfileDef",
      "target": "IfcRectangleProfileDef",
      "value": 1
    },
    {
      "source": "IfcRectangleHollowProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRectangleProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcRectangleProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRectangleProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRectangularPyramid",
      "target": "IfcCsgPrimitive3D",
      "value": 1
    },
    {
      "source": "IfcRectangularPyramid",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRectangularPyramid",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRectangularPyramid",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRectangularTrimmedSurface",
      "target": "IfcBoundedSurface",
      "value": 1
    },
    {
      "source": "IfcRectangularTrimmedSurface",
      "target": "IfcSurface",
      "value": 1
    },
    {
      "source": "IfcRectangularTrimmedSurface",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcRectangularTrimmedSurface",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcRectangularTrimmedSurface",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcRectangularTrimmedSurface",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcReferencesValueDocument",
      "target": "IfcDocumentSelect",
      "value": 1
    },
    {
      "source": "IfcRegularTimeSeries",
      "target": "IfcTimeSeries",
      "value": 1
    },
    {
      "source": "IfcRegularTimeSeries",
      "target": "IfcTimeMeasure",
      "value": 1
    },
    {
      "source": "IfcReinforcementBarProperties",
      "target": "IfcAreaMeasure",
      "value": 1
    },
    {
      "source": "IfcReinforcementBarProperties",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcReinforcementDefinitionProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcReinforcingBar",
      "target": "IfcReinforcingElement",
      "value": 1
    },
    {
      "source": "IfcReinforcingBar",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcReinforcingBar",
      "target": "IfcAreaMeasure",
      "value": 1
    },
    {
      "source": "IfcReinforcingBar",
      "target": "IfcReinforcingBarRoleEnum",
      "value": 1
    },
    {
      "source": "IfcReinforcingElement",
      "target": "IfcBuildingElementComponent",
      "value": 1
    },
    {
      "source": "IfcReinforcingMesh",
      "target": "IfcReinforcingElement",
      "value": 1
    },
    {
      "source": "IfcReinforcingMesh",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcReinforcingMesh",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcReinforcingMesh",
      "target": "IfcAreaMeasure",
      "value": 1
    },
    {
      "source": "IfcReinforcingMesh",
      "target": "IfcAreaMeasure",
      "value": 1
    },
    {
      "source": "IfcReinforcingMesh",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcReinforcingMesh",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRelAggregates",
      "target": "IfcRelDecomposes",
      "value": 1
    },
    {
      "source": "IfcRelAssigns",
      "target": "IfcRelationship",
      "value": 1
    },
    {
      "source": "IfcRelAssignsTasks",
      "target": "IfcRelAssignsToControl",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToActor",
      "target": "IfcRelAssigns",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToActor",
      "target": "IfcActor",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToControl",
      "target": "IfcRelAssigns",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToControl",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToGroup",
      "target": "IfcRelAssigns",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToGroup",
      "target": "IfcGroup",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToProcess",
      "target": "IfcRelAssigns",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToProcess",
      "target": "IfcProcess",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToProduct",
      "target": "IfcRelAssigns",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToProduct",
      "target": "IfcProduct",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToProjectOrder",
      "target": "IfcRelAssignsToControl",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToResource",
      "target": "IfcRelAssigns",
      "value": 1
    },
    {
      "source": "IfcRelAssignsToResource",
      "target": "IfcResource",
      "value": 1
    },
    {
      "source": "IfcRelAssociates",
      "target": "IfcRelationship",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesAppliedValue",
      "target": "IfcRelAssociates",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesAppliedValue",
      "target": "IfcAppliedValue",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesApproval",
      "target": "IfcRelAssociates",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesApproval",
      "target": "IfcApproval",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesClassification",
      "target": "IfcRelAssociates",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesClassification",
      "target": "IfcClassificationNotationSelect",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesConstraint",
      "target": "IfcRelAssociates",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesConstraint",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesConstraint",
      "target": "IfcConstraint",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesDocument",
      "target": "IfcRelAssociates",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesDocument",
      "target": "IfcDocumentSelect",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesLibrary",
      "target": "IfcRelAssociates",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesLibrary",
      "target": "IfcLibrarySelect",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesMaterial",
      "target": "IfcRelAssociates",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesMaterial",
      "target": "IfcMaterialSelect",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesProfileProperties",
      "target": "IfcRelAssociates",
      "value": 1
    },
    {
      "source": "IfcRelAssociatesProfileProperties",
      "target": "IfcProfileProperties",
      "value": 1
    },
    {
      "source": "IfcRelConnects",
      "target": "IfcRelationship",
      "value": 1
    },
    {
      "source": "IfcRelConnectsElements",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelConnectsElements",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcRelConnectsElements",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcRelConnectsPathElements",
      "target": "IfcRelConnectsElements",
      "value": 1
    },
    {
      "source": "IfcRelConnectsPathElements",
      "target": "IfcConnectionTypeEnum",
      "value": 1
    },
    {
      "source": "IfcRelConnectsPathElements",
      "target": "IfcConnectionTypeEnum",
      "value": 1
    },
    {
      "source": "IfcRelConnectsPortToElement",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelConnectsPortToElement",
      "target": "IfcPort",
      "value": 1
    },
    {
      "source": "IfcRelConnectsPortToElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcRelConnectsPorts",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelConnectsPorts",
      "target": "IfcPort",
      "value": 1
    },
    {
      "source": "IfcRelConnectsPorts",
      "target": "IfcPort",
      "value": 1
    },
    {
      "source": "IfcRelConnectsStructuralActivity",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelConnectsStructuralActivity",
      "target": "IfcStructuralActivityAssignmentSelect",
      "value": 1
    },
    {
      "source": "IfcRelConnectsStructuralActivity",
      "target": "IfcStructuralActivity",
      "value": 1
    },
    {
      "source": "IfcRelConnectsStructuralElement",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelConnectsStructuralElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcRelConnectsStructuralElement",
      "target": "IfcStructuralMember",
      "value": 1
    },
    {
      "source": "IfcRelConnectsStructuralMember",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelConnectsStructuralMember",
      "target": "IfcStructuralMember",
      "value": 1
    },
    {
      "source": "IfcRelConnectsStructuralMember",
      "target": "IfcStructuralConnection",
      "value": 1
    },
    {
      "source": "IfcRelConnectsWithEccentricity",
      "target": "IfcRelConnectsStructuralMember",
      "value": 1
    },
    {
      "source": "IfcRelConnectsWithEccentricity",
      "target": "IfcConnectionGeometry",
      "value": 1
    },
    {
      "source": "IfcRelConnectsWithRealizingElements",
      "target": "IfcRelConnectsElements",
      "value": 1
    },
    {
      "source": "IfcRelContainedInSpatialStructure",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelContainedInSpatialStructure",
      "target": "IfcSpatialStructureElement",
      "value": 1
    },
    {
      "source": "IfcRelCoversBldgElements",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelCoversBldgElements",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcRelCoversSpaces",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelCoversSpaces",
      "target": "IfcSpace",
      "value": 1
    },
    {
      "source": "IfcRelDecomposes",
      "target": "IfcRelationship",
      "value": 1
    },
    {
      "source": "IfcRelDecomposes",
      "target": "IfcObjectDefinition",
      "value": 1
    },
    {
      "source": "IfcRelDefines",
      "target": "IfcRelationship",
      "value": 1
    },
    {
      "source": "IfcRelDefinesByProperties",
      "target": "IfcRelDefines",
      "value": 1
    },
    {
      "source": "IfcRelDefinesByProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcRelDefinesByType",
      "target": "IfcRelDefines",
      "value": 1
    },
    {
      "source": "IfcRelDefinesByType",
      "target": "IfcTypeObject",
      "value": 1
    },
    {
      "source": "IfcRelFillsElement",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelFillsElement",
      "target": "IfcOpeningElement",
      "value": 1
    },
    {
      "source": "IfcRelFillsElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcRelFlowControlElements",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelFlowControlElements",
      "target": "IfcDistributionFlowElement",
      "value": 1
    },
    {
      "source": "IfcRelInteractionRequirements",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelInteractionRequirements",
      "target": "IfcSpaceProgram",
      "value": 1
    },
    {
      "source": "IfcRelInteractionRequirements",
      "target": "IfcSpaceProgram",
      "value": 1
    },
    {
      "source": "IfcRelNests",
      "target": "IfcRelDecomposes",
      "value": 1
    },
    {
      "source": "IfcRelOccupiesSpaces",
      "target": "IfcRelAssignsToActor",
      "value": 1
    },
    {
      "source": "IfcRelOverridesProperties",
      "target": "IfcRelDefinesByProperties",
      "value": 1
    },
    {
      "source": "IfcRelProjectsElement",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelProjectsElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcRelProjectsElement",
      "target": "IfcFeatureElementAddition",
      "value": 1
    },
    {
      "source": "IfcRelReferencedInSpatialStructure",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelReferencedInSpatialStructure",
      "target": "IfcSpatialStructureElement",
      "value": 1
    },
    {
      "source": "IfcRelSchedulesCostItems",
      "target": "IfcRelAssignsToControl",
      "value": 1
    },
    {
      "source": "IfcRelSequence",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelSequence",
      "target": "IfcProcess",
      "value": 1
    },
    {
      "source": "IfcRelSequence",
      "target": "IfcProcess",
      "value": 1
    },
    {
      "source": "IfcRelSequence",
      "target": "IfcTimeMeasure",
      "value": 1
    },
    {
      "source": "IfcRelSequence",
      "target": "IfcSequenceEnum",
      "value": 1
    },
    {
      "source": "IfcRelServicesBuildings",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelServicesBuildings",
      "target": "IfcSystem",
      "value": 1
    },
    {
      "source": "IfcRelSpaceBoundary",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelSpaceBoundary",
      "target": "IfcSpace",
      "value": 1
    },
    {
      "source": "IfcRelSpaceBoundary",
      "target": "IfcPhysicalOrVirtualEnum",
      "value": 1
    },
    {
      "source": "IfcRelSpaceBoundary",
      "target": "IfcInternalOrExternalEnum",
      "value": 1
    },
    {
      "source": "IfcRelVoidsElement",
      "target": "IfcRelConnects",
      "value": 1
    },
    {
      "source": "IfcRelVoidsElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcRelVoidsElement",
      "target": "IfcFeatureElementSubtraction",
      "value": 1
    },
    {
      "source": "IfcRelationship",
      "target": "IfcRoot",
      "value": 1
    },
    {
      "source": "IfcRelaxation",
      "target": "IfcNormalisedRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcRelaxation",
      "target": "IfcNormalisedRatioMeasure",
      "value": 1
    },
    {
      "source": "IfcRepresentation",
      "target": "IfcRepresentationContext",
      "value": 1
    },
    {
      "source": "IfcRepresentationMap",
      "target": "IfcAxis2Placement",
      "value": 1
    },
    {
      "source": "IfcRepresentationMap",
      "target": "IfcRepresentation",
      "value": 1
    },
    {
      "source": "IfcResource",
      "target": "IfcObject",
      "value": 1
    },
    {
      "source": "IfcRevolvedAreaSolid",
      "target": "IfcSweptAreaSolid",
      "value": 1
    },
    {
      "source": "IfcRevolvedAreaSolid",
      "target": "IfcAxis1Placement",
      "value": 1
    },
    {
      "source": "IfcRevolvedAreaSolid",
      "target": "IfcPlaneAngleMeasure",
      "value": 1
    },
    {
      "source": "IfcRibPlateProfileProperties",
      "target": "IfcProfileProperties",
      "value": 1
    },
    {
      "source": "IfcRibPlateProfileProperties",
      "target": "IfcRibPlateDirectionEnum",
      "value": 1
    },
    {
      "source": "IfcRightCircularCone",
      "target": "IfcCsgPrimitive3D",
      "value": 1
    },
    {
      "source": "IfcRightCircularCone",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRightCircularCone",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRightCircularCylinder",
      "target": "IfcCsgPrimitive3D",
      "value": 1
    },
    {
      "source": "IfcRightCircularCylinder",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRightCircularCylinder",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcRoof",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcRoof",
      "target": "IfcRoofTypeEnum",
      "value": 1
    },
    {
      "source": "IfcRoot",
      "target": "IfcGloballyUniqueId",
      "value": 1
    },
    {
      "source": "IfcRoot",
      "target": "IfcOwnerHistory",
      "value": 1
    },
    {
      "source": "IfcRoundedEdgeFeature",
      "target": "IfcEdgeFeature",
      "value": 1
    },
    {
      "source": "IfcRoundedRectangleProfileDef",
      "target": "IfcRectangleProfileDef",
      "value": 1
    },
    {
      "source": "IfcRoundedRectangleProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcSIUnit",
      "target": "IfcNamedUnit",
      "value": 1
    },
    {
      "source": "IfcSIUnit",
      "target": "IfcSIUnitName",
      "value": 1
    },
    {
      "source": "IfcSanitaryTerminalType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcSanitaryTerminalType",
      "target": "IfcSanitaryTerminalTypeEnum",
      "value": 1
    },
    {
      "source": "IfcScheduleTimeControl",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcSectionProperties",
      "target": "IfcSectionTypeEnum",
      "value": 1
    },
    {
      "source": "IfcSectionProperties",
      "target": "IfcProfileDef",
      "value": 1
    },
    {
      "source": "IfcSectionReinforcementProperties",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcSectionReinforcementProperties",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcSectionReinforcementProperties",
      "target": "IfcReinforcingBarRoleEnum",
      "value": 1
    },
    {
      "source": "IfcSectionReinforcementProperties",
      "target": "IfcSectionProperties",
      "value": 1
    },
    {
      "source": "IfcSectionedSpine",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcSectionedSpine",
      "target": "IfcCompositeCurve",
      "value": 1
    },
    {
      "source": "IfcSensorType",
      "target": "IfcDistributionControlElementType",
      "value": 1
    },
    {
      "source": "IfcSensorType",
      "target": "IfcSensorTypeEnum",
      "value": 1
    },
    {
      "source": "IfcServiceLife",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcServiceLife",
      "target": "IfcServiceLifeTypeEnum",
      "value": 1
    },
    {
      "source": "IfcServiceLife",
      "target": "IfcTimeMeasure",
      "value": 1
    },
    {
      "source": "IfcServiceLifeFactor",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcServiceLifeFactor",
      "target": "IfcServiceLifeFactorTypeEnum",
      "value": 1
    },
    {
      "source": "IfcServiceLifeFactor",
      "target": "IfcMeasureValue",
      "value": 1
    },
    {
      "source": "IfcShapeAspect",
      "target": "IfcProductDefinitionShape",
      "value": 1
    },
    {
      "source": "IfcShapeModel",
      "target": "IfcRepresentation",
      "value": 1
    },
    {
      "source": "IfcShapeRepresentation",
      "target": "IfcShapeModel",
      "value": 1
    },
    {
      "source": "IfcShellBasedSurfaceModel",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcSimpleProperty",
      "target": "IfcProperty",
      "value": 1
    },
    {
      "source": "IfcSite",
      "target": "IfcSpatialStructureElement",
      "value": 1
    },
    {
      "source": "IfcSlab",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcSlabType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcSlabType",
      "target": "IfcSlabTypeEnum",
      "value": 1
    },
    {
      "source": "IfcSlippageConnectionCondition",
      "target": "IfcStructuralConnectionCondition",
      "value": 1
    },
    {
      "source": "IfcSolidModel",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcSoundProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcSoundProperties",
      "target": "IfcBoolean",
      "value": 1
    },
    {
      "source": "IfcSoundValue",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcSoundValue",
      "target": "IfcFrequencyMeasure",
      "value": 1
    },
    {
      "source": "IfcSpace",
      "target": "IfcSpatialStructureElement",
      "value": 1
    },
    {
      "source": "IfcSpace",
      "target": "IfcInternalOrExternalEnum",
      "value": 1
    },
    {
      "source": "IfcSpaceHeaterType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcSpaceHeaterType",
      "target": "IfcSpaceHeaterTypeEnum",
      "value": 1
    },
    {
      "source": "IfcSpaceProgram",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcSpaceProgram",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcSpaceProgram",
      "target": "IfcAreaMeasure",
      "value": 1
    },
    {
      "source": "IfcSpaceThermalLoadProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcSpaceThermalLoadProperties",
      "target": "IfcThermalLoadSourceEnum",
      "value": 1
    },
    {
      "source": "IfcSpaceThermalLoadProperties",
      "target": "IfcPropertySourceEnum",
      "value": 1
    },
    {
      "source": "IfcSpaceThermalLoadProperties",
      "target": "IfcPowerMeasure",
      "value": 1
    },
    {
      "source": "IfcSpaceThermalLoadProperties",
      "target": "IfcThermalLoadTypeEnum",
      "value": 1
    },
    {
      "source": "IfcSpaceType",
      "target": "IfcSpatialStructureElementType",
      "value": 1
    },
    {
      "source": "IfcSpaceType",
      "target": "IfcSpaceTypeEnum",
      "value": 1
    },
    {
      "source": "IfcSpatialStructureElement",
      "target": "IfcProduct",
      "value": 1
    },
    {
      "source": "IfcSpatialStructureElement",
      "target": "IfcElementCompositionEnum",
      "value": 1
    },
    {
      "source": "IfcSpatialStructureElementType",
      "target": "IfcElementType",
      "value": 1
    },
    {
      "source": "IfcSphere",
      "target": "IfcCsgPrimitive3D",
      "value": 1
    },
    {
      "source": "IfcSphere",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcStackTerminalType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcStackTerminalType",
      "target": "IfcStackTerminalTypeEnum",
      "value": 1
    },
    {
      "source": "IfcStair",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcStair",
      "target": "IfcStairTypeEnum",
      "value": 1
    },
    {
      "source": "IfcStairFlight",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcStairFlightType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcStairFlightType",
      "target": "IfcStairFlightTypeEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralAction",
      "target": "IfcStructuralActivity",
      "value": 1
    },
    {
      "source": "IfcStructuralActivity",
      "target": "IfcProduct",
      "value": 1
    },
    {
      "source": "IfcStructuralActivity",
      "target": "IfcStructuralLoad",
      "value": 1
    },
    {
      "source": "IfcStructuralActivity",
      "target": "IfcGlobalOrLocalEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralAnalysisModel",
      "target": "IfcSystem",
      "value": 1
    },
    {
      "source": "IfcStructuralAnalysisModel",
      "target": "IfcAnalysisModelTypeEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralConnection",
      "target": "IfcStructuralItem",
      "value": 1
    },
    {
      "source": "IfcStructuralCurveConnection",
      "target": "IfcStructuralConnection",
      "value": 1
    },
    {
      "source": "IfcStructuralCurveMember",
      "target": "IfcStructuralMember",
      "value": 1
    },
    {
      "source": "IfcStructuralCurveMember",
      "target": "IfcStructuralCurveTypeEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralCurveMemberVarying",
      "target": "IfcStructuralCurveMember",
      "value": 1
    },
    {
      "source": "IfcStructuralItem",
      "target": "IfcProduct",
      "value": 1
    },
    {
      "source": "IfcStructuralLinearAction",
      "target": "IfcStructuralAction",
      "value": 1
    },
    {
      "source": "IfcStructuralLinearAction",
      "target": "IfcProjectedOrTrueLengthEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralLinearActionVarying",
      "target": "IfcStructuralLinearAction",
      "value": 1
    },
    {
      "source": "IfcStructuralLinearActionVarying",
      "target": "IfcShapeAspect",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadGroup",
      "target": "IfcGroup",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadGroup",
      "target": "IfcLoadGroupTypeEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadGroup",
      "target": "IfcActionTypeEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadGroup",
      "target": "IfcActionSourceTypeEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadLinearForce",
      "target": "IfcStructuralLoadStatic",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadPlanarForce",
      "target": "IfcStructuralLoadStatic",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadSingleDisplacement",
      "target": "IfcStructuralLoadStatic",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadSingleDisplacementDistortion",
      "target": "IfcStructuralLoadSingleDisplacement",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadSingleForce",
      "target": "IfcStructuralLoadStatic",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadSingleForceWarping",
      "target": "IfcStructuralLoadSingleForce",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadStatic",
      "target": "IfcStructuralLoad",
      "value": 1
    },
    {
      "source": "IfcStructuralLoadTemperature",
      "target": "IfcStructuralLoadStatic",
      "value": 1
    },
    {
      "source": "IfcStructuralMember",
      "target": "IfcStructuralItem",
      "value": 1
    },
    {
      "source": "IfcStructuralPlanarAction",
      "target": "IfcStructuralAction",
      "value": 1
    },
    {
      "source": "IfcStructuralPlanarAction",
      "target": "IfcProjectedOrTrueLengthEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralPlanarActionVarying",
      "target": "IfcStructuralPlanarAction",
      "value": 1
    },
    {
      "source": "IfcStructuralPlanarActionVarying",
      "target": "IfcShapeAspect",
      "value": 1
    },
    {
      "source": "IfcStructuralPointAction",
      "target": "IfcStructuralAction",
      "value": 1
    },
    {
      "source": "IfcStructuralPointConnection",
      "target": "IfcStructuralConnection",
      "value": 1
    },
    {
      "source": "IfcStructuralPointReaction",
      "target": "IfcStructuralReaction",
      "value": 1
    },
    {
      "source": "IfcStructuralProfileProperties",
      "target": "IfcGeneralProfileProperties",
      "value": 1
    },
    {
      "source": "IfcStructuralReaction",
      "target": "IfcStructuralActivity",
      "value": 1
    },
    {
      "source": "IfcStructuralResultGroup",
      "target": "IfcGroup",
      "value": 1
    },
    {
      "source": "IfcStructuralResultGroup",
      "target": "IfcAnalysisTheoryTypeEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralSteelProfileProperties",
      "target": "IfcStructuralProfileProperties",
      "value": 1
    },
    {
      "source": "IfcStructuralSurfaceConnection",
      "target": "IfcStructuralConnection",
      "value": 1
    },
    {
      "source": "IfcStructuralSurfaceMember",
      "target": "IfcStructuralMember",
      "value": 1
    },
    {
      "source": "IfcStructuralSurfaceMember",
      "target": "IfcStructuralSurfaceTypeEnum",
      "value": 1
    },
    {
      "source": "IfcStructuralSurfaceMemberVarying",
      "target": "IfcStructuralSurfaceMember",
      "value": 1
    },
    {
      "source": "IfcStructuralSurfaceMemberVarying",
      "target": "IfcShapeAspect",
      "value": 1
    },
    {
      "source": "IfcStructuredDimensionCallout",
      "target": "IfcDraughtingCallout",
      "value": 1
    },
    {
      "source": "IfcStyleModel",
      "target": "IfcRepresentation",
      "value": 1
    },
    {
      "source": "IfcStyledItem",
      "target": "IfcRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcStyledRepresentation",
      "target": "IfcStyleModel",
      "value": 1
    },
    {
      "source": "IfcSubContractResource",
      "target": "IfcConstructionResource",
      "value": 1
    },
    {
      "source": "IfcSubedge",
      "target": "IfcEdge",
      "value": 1
    },
    {
      "source": "IfcSubedge",
      "target": "IfcEdge",
      "value": 1
    },
    {
      "source": "IfcSurface",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcSurfaceCurveSweptAreaSolid",
      "target": "IfcSweptAreaSolid",
      "value": 1
    },
    {
      "source": "IfcSurfaceCurveSweptAreaSolid",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcSurfaceCurveSweptAreaSolid",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcSurfaceCurveSweptAreaSolid",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcSurfaceCurveSweptAreaSolid",
      "target": "IfcSurface",
      "value": 1
    },
    {
      "source": "IfcSurfaceOfLinearExtrusion",
      "target": "IfcSweptSurface",
      "value": 1
    },
    {
      "source": "IfcSurfaceOfLinearExtrusion",
      "target": "IfcDirection",
      "value": 1
    },
    {
      "source": "IfcSurfaceOfLinearExtrusion",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcSurfaceOfRevolution",
      "target": "IfcSweptSurface",
      "value": 1
    },
    {
      "source": "IfcSurfaceOfRevolution",
      "target": "IfcAxis1Placement",
      "value": 1
    },
    {
      "source": "IfcSurfaceStyle",
      "target": "IfcPresentationStyle",
      "value": 1
    },
    {
      "source": "IfcSurfaceStyle",
      "target": "IfcSurfaceSide",
      "value": 1
    },
    {
      "source": "IfcSurfaceStyleLighting",
      "target": "IfcColourRgb",
      "value": 1
    },
    {
      "source": "IfcSurfaceStyleLighting",
      "target": "IfcColourRgb",
      "value": 1
    },
    {
      "source": "IfcSurfaceStyleLighting",
      "target": "IfcColourRgb",
      "value": 1
    },
    {
      "source": "IfcSurfaceStyleLighting",
      "target": "IfcColourRgb",
      "value": 1
    },
    {
      "source": "IfcSurfaceStyleRendering",
      "target": "IfcSurfaceStyleShading",
      "value": 1
    },
    {
      "source": "IfcSurfaceStyleRendering",
      "target": "IfcReflectanceMethodEnum",
      "value": 1
    },
    {
      "source": "IfcSurfaceStyleShading",
      "target": "IfcColourRgb",
      "value": 1
    },
    {
      "source": "IfcSurfaceTexture",
      "target": "IfcSurfaceTextureEnum",
      "value": 1
    },
    {
      "source": "IfcSweptAreaSolid",
      "target": "IfcSolidModel",
      "value": 1
    },
    {
      "source": "IfcSweptAreaSolid",
      "target": "IfcProfileDef",
      "value": 1
    },
    {
      "source": "IfcSweptAreaSolid",
      "target": "IfcAxis2Placement3D",
      "value": 1
    },
    {
      "source": "IfcSweptDiskSolid",
      "target": "IfcSolidModel",
      "value": 1
    },
    {
      "source": "IfcSweptDiskSolid",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcSweptDiskSolid",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcSweptDiskSolid",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcSweptDiskSolid",
      "target": "IfcParameterValue",
      "value": 1
    },
    {
      "source": "IfcSweptSurface",
      "target": "IfcSurface",
      "value": 1
    },
    {
      "source": "IfcSweptSurface",
      "target": "IfcProfileDef",
      "value": 1
    },
    {
      "source": "IfcSweptSurface",
      "target": "IfcAxis2Placement3D",
      "value": 1
    },
    {
      "source": "IfcSwitchingDeviceType",
      "target": "IfcFlowControllerType",
      "value": 1
    },
    {
      "source": "IfcSwitchingDeviceType",
      "target": "IfcSwitchingDeviceTypeEnum",
      "value": 1
    },
    {
      "source": "IfcSymbolStyle",
      "target": "IfcPresentationStyle",
      "value": 1
    },
    {
      "source": "IfcSymbolStyle",
      "target": "IfcSymbolStyleSelect",
      "value": 1
    },
    {
      "source": "IfcSystem",
      "target": "IfcGroup",
      "value": 1
    },
    {
      "source": "IfcSystemFurnitureElementType",
      "target": "IfcFurnishingElementType",
      "value": 1
    },
    {
      "source": "IfcTShapeProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcTShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcTShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcTShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcTShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcTankType",
      "target": "IfcFlowStorageDeviceType",
      "value": 1
    },
    {
      "source": "IfcTankType",
      "target": "IfcTankTypeEnum",
      "value": 1
    },
    {
      "source": "IfcTask",
      "target": "IfcProcess",
      "value": 1
    },
    {
      "source": "IfcTask",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcTelecomAddress",
      "target": "IfcAddress",
      "value": 1
    },
    {
      "source": "IfcTendon",
      "target": "IfcReinforcingElement",
      "value": 1
    },
    {
      "source": "IfcTendon",
      "target": "IfcTendonTypeEnum",
      "value": 1
    },
    {
      "source": "IfcTendon",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcTendon",
      "target": "IfcAreaMeasure",
      "value": 1
    },
    {
      "source": "IfcTendonAnchor",
      "target": "IfcReinforcingElement",
      "value": 1
    },
    {
      "source": "IfcTerminatorSymbol",
      "target": "IfcAnnotationSymbolOccurrence",
      "value": 1
    },
    {
      "source": "IfcTerminatorSymbol",
      "target": "IfcAnnotationCurveOccurrence",
      "value": 1
    },
    {
      "source": "IfcTextLiteral",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcTextLiteral",
      "target": "IfcPresentableText",
      "value": 1
    },
    {
      "source": "IfcTextLiteral",
      "target": "IfcAxis2Placement",
      "value": 1
    },
    {
      "source": "IfcTextLiteral",
      "target": "IfcTextPath",
      "value": 1
    },
    {
      "source": "IfcTextLiteralWithExtent",
      "target": "IfcTextLiteral",
      "value": 1
    },
    {
      "source": "IfcTextLiteralWithExtent",
      "target": "IfcPlanarExtent",
      "value": 1
    },
    {
      "source": "IfcTextLiteralWithExtent",
      "target": "IfcBoxAlignment",
      "value": 1
    },
    {
      "source": "IfcTextStyle",
      "target": "IfcPresentationStyle",
      "value": 1
    },
    {
      "source": "IfcTextStyle",
      "target": "IfcTextFontSelect",
      "value": 1
    },
    {
      "source": "IfcTextStyleFontModel",
      "target": "IfcPreDefinedTextFont",
      "value": 1
    },
    {
      "source": "IfcTextStyleFontModel",
      "target": "IfcSizeSelect",
      "value": 1
    },
    {
      "source": "IfcTextStyleForDefinedFont",
      "target": "IfcColour",
      "value": 1
    },
    {
      "source": "IfcTextureCoordinateGenerator",
      "target": "IfcTextureCoordinate",
      "value": 1
    },
    {
      "source": "IfcTextureCoordinateGenerator",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcTextureMap",
      "target": "IfcTextureCoordinate",
      "value": 1
    },
    {
      "source": "IfcThermalMaterialProperties",
      "target": "IfcMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcTimeSeries",
      "target": "IfcLabel",
      "value": 1
    },
    {
      "source": "IfcTimeSeries",
      "target": "IfcDateTimeSelect",
      "value": 1
    },
    {
      "source": "IfcTimeSeries",
      "target": "IfcDateTimeSelect",
      "value": 1
    },
    {
      "source": "IfcTimeSeries",
      "target": "IfcTimeSeriesDataTypeEnum",
      "value": 1
    },
    {
      "source": "IfcTimeSeries",
      "target": "IfcDataOriginEnum",
      "value": 1
    },
    {
      "source": "IfcTimeSeriesReferenceRelationship",
      "target": "IfcTimeSeries",
      "value": 1
    },
    {
      "source": "IfcTimeSeriesSchedule",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcTimeSeriesSchedule",
      "target": "IfcTimeSeriesScheduleTypeEnum",
      "value": 1
    },
    {
      "source": "IfcTimeSeriesSchedule",
      "target": "IfcTimeSeries",
      "value": 1
    },
    {
      "source": "IfcTopologicalRepresentationItem",
      "target": "IfcRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcTopologyRepresentation",
      "target": "IfcShapeModel",
      "value": 1
    },
    {
      "source": "IfcTransformerType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcTransformerType",
      "target": "IfcTransformerTypeEnum",
      "value": 1
    },
    {
      "source": "IfcTransportElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcTransportElementType",
      "target": "IfcElementType",
      "value": 1
    },
    {
      "source": "IfcTransportElementType",
      "target": "IfcTransportElementTypeEnum",
      "value": 1
    },
    {
      "source": "IfcTrapeziumProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcTrapeziumProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcTrapeziumProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcTrapeziumProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcTrapeziumProfileDef",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcTrimmedCurve",
      "target": "IfcBoundedCurve",
      "value": 1
    },
    {
      "source": "IfcTrimmedCurve",
      "target": "IfcCurve",
      "value": 1
    },
    {
      "source": "IfcTrimmedCurve",
      "target": "IfcTrimmingPreference",
      "value": 1
    },
    {
      "source": "IfcTubeBundleType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcTubeBundleType",
      "target": "IfcTubeBundleTypeEnum",
      "value": 1
    },
    {
      "source": "IfcTwoDirectionRepeatFactor",
      "target": "IfcOneDirectionRepeatFactor",
      "value": 1
    },
    {
      "source": "IfcTwoDirectionRepeatFactor",
      "target": "IfcVector",
      "value": 1
    },
    {
      "source": "IfcTypeObject",
      "target": "IfcObjectDefinition",
      "value": 1
    },
    {
      "source": "IfcTypeProduct",
      "target": "IfcTypeObject",
      "value": 1
    },
    {
      "source": "IfcUShapeProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcUShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcUShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcUShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcUShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcUnitaryEquipmentType",
      "target": "IfcEnergyConversionDeviceType",
      "value": 1
    },
    {
      "source": "IfcUnitaryEquipmentType",
      "target": "IfcUnitaryEquipmentTypeEnum",
      "value": 1
    },
    {
      "source": "IfcValveType",
      "target": "IfcFlowControllerType",
      "value": 1
    },
    {
      "source": "IfcValveType",
      "target": "IfcValveTypeEnum",
      "value": 1
    },
    {
      "source": "IfcVector",
      "target": "IfcGeometricRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcVector",
      "target": "IfcDirection",
      "value": 1
    },
    {
      "source": "IfcVector",
      "target": "IfcLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcVertex",
      "target": "IfcTopologicalRepresentationItem",
      "value": 1
    },
    {
      "source": "IfcVertexLoop",
      "target": "IfcLoop",
      "value": 1
    },
    {
      "source": "IfcVertexLoop",
      "target": "IfcVertex",
      "value": 1
    },
    {
      "source": "IfcVertexPoint",
      "target": "IfcVertex",
      "value": 1
    },
    {
      "source": "IfcVertexPoint",
      "target": "IfcPoint",
      "value": 1
    },
    {
      "source": "IfcVibrationIsolatorType",
      "target": "IfcDiscreteAccessoryType",
      "value": 1
    },
    {
      "source": "IfcVibrationIsolatorType",
      "target": "IfcVibrationIsolatorTypeEnum",
      "value": 1
    },
    {
      "source": "IfcVirtualElement",
      "target": "IfcElement",
      "value": 1
    },
    {
      "source": "IfcWall",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcWallStandardCase",
      "target": "IfcWall",
      "value": 1
    },
    {
      "source": "IfcWallType",
      "target": "IfcBuildingElementType",
      "value": 1
    },
    {
      "source": "IfcWallType",
      "target": "IfcWallTypeEnum",
      "value": 1
    },
    {
      "source": "IfcWasteTerminalType",
      "target": "IfcFlowTerminalType",
      "value": 1
    },
    {
      "source": "IfcWasteTerminalType",
      "target": "IfcWasteTerminalTypeEnum",
      "value": 1
    },
    {
      "source": "IfcWaterProperties",
      "target": "IfcMaterialProperties",
      "value": 1
    },
    {
      "source": "IfcWindow",
      "target": "IfcBuildingElement",
      "value": 1
    },
    {
      "source": "IfcWindowLiningProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcWindowPanelProperties",
      "target": "IfcPropertySetDefinition",
      "value": 1
    },
    {
      "source": "IfcWindowPanelProperties",
      "target": "IfcWindowPanelOperationEnum",
      "value": 1
    },
    {
      "source": "IfcWindowPanelProperties",
      "target": "IfcWindowPanelPositionEnum",
      "value": 1
    },
    {
      "source": "IfcWindowStyle",
      "target": "IfcTypeProduct",
      "value": 1
    },
    {
      "source": "IfcWindowStyle",
      "target": "IfcWindowStyleConstructionEnum",
      "value": 1
    },
    {
      "source": "IfcWindowStyle",
      "target": "IfcWindowStyleOperationEnum",
      "value": 1
    },
    {
      "source": "IfcWorkControl",
      "target": "IfcControl",
      "value": 1
    },
    {
      "source": "IfcWorkControl",
      "target": "IfcIdentifier",
      "value": 1
    },
    {
      "source": "IfcWorkControl",
      "target": "IfcDateTimeSelect",
      "value": 1
    },
    {
      "source": "IfcWorkControl",
      "target": "IfcDateTimeSelect",
      "value": 1
    },
    {
      "source": "IfcWorkPlan",
      "target": "IfcWorkControl",
      "value": 1
    },
    {
      "source": "IfcWorkSchedule",
      "target": "IfcWorkControl",
      "value": 1
    },
    {
      "source": "IfcZShapeProfileDef",
      "target": "IfcParameterizedProfileDef",
      "value": 1
    },
    {
      "source": "IfcZShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcZShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcZShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcZShapeProfileDef",
      "target": "IfcPositiveLengthMeasure",
      "value": 1
    },
    {
      "source": "IfcZone",
      "target": "IfcGroup",
      "value": 1
    }
  ]
}