/**
 * This file is auto-generated by protobufgen
 * Don't change manually
 */



export enum FocusState {
	FocusStateUnknown = "FocusStateUnknown",
	FocusStateStart = "FocusStateStart",
	FocusStateContinue = "FocusStateContinue",
	FocusStateClosed = "FocusStateClosed",
}


export enum ContractType {
	ContractTypeUnknown = "ContractTypeUnknown",
	ContractTypeAgriculture = "ContractTypeAgriculture",
	ContractTypeIndustrial = "ContractTypeIndustrial",
	ContractTypeFinance = "ContractTypeFinance",
	ContractTypeOther = "ContractTypeOther",
}


export enum EventLevelType {
	EventLevelTypeUnknown = "EventLevelTypeUnknown",
	EventLevelTypeExtra = "EventLevelTypeExtra",
	EventLevelTypeMajor = "EventLevelTypeMajor",
	EventLevelTypeBiggish = "EventLevelTypeBiggish",
	EventLevelTypeLimited = "EventLevelTypeLimited",
	EventLevelTypeSignificant = "EventLevelTypeSignificant",
	EventLevelTypeGeneral = "EventLevelTypeGeneral",
	EventLevelTypeAbnormal = "EventLevelTypeAbnormal",
}


export enum EventStageType {
	EventStageTypeUnknown = "EventStageTypeUnknown",
	EventStageTypeEarly = "EventStageTypeEarly",
	EventStageTypeDevelopment = "EventStageTypeDevelopment",
	EventStageTypeMaximum = "EventStageTypeMaximum",
	EventStageTypeReduced = "EventStageTypeReduced",
	EventStageTypePhaseOut = "EventStageTypePhaseOut",
}



export interface GetVarietyDailyReq {
	name?: string;
	startDate?: string;
	endDate?: string;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	pageSize?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	pageNum?: number;
}

export interface GetVarietyDailyResp {
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	code?: number;
	data?: DataDaily[];
}

export interface DataDaily {
	variety?: string;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	lastSettlement?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	opening?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	highest?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	lowest?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	closed?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	todaySettlement?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	changeOne?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	changeTwo?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	volume?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	emptyVolume?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	changes?: number;
	/**
	 * @pattern ^\d+$
	 */
	turnover?: string;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	settlementPrice?: number;
	date?: string;
}

export interface GetContractReq {

}

export interface GetContractResp {
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	code?: number;
	contractes?: VarietyContract[];
}

export interface VarietyContract {
	variety?: string;
	date?: string[];
}

export interface CreateFocusReq {
	contract?: string;
	contractType?: ContractType;
	eventType?: EventLevelType;
	stageType?: EventStageType;
	/**
	 * @pattern ^\d+$
	 */
	accidentStart?: string;
	/**
	 * @pattern ^\d+$
	 */
	accidentEnd?: string;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	highest?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	lowest?: number;
	remarks?: string;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	predict?: number;
	state?: FocusState;
}

export interface FocusDetail {
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	opening?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	highest?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	lowest?: number;
	/**
	 * @pattern ^\d+$
	 */
	createDate?: string;
	remarks?: string;
}

export interface CreateFocusResp {
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	code?: number;
	message?: string;
}

export interface UpdateFocusReq {
	id?: string;
	detail?: FocusDetail;
}

export interface UpdateFocusResp {
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	code?: number;
	message?: string;
}

export interface CancelFocusReq {
	id?: string;
	state?: FocusState;
}

export interface CancelFocusResp {
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	code?: number;
	message?: string;
}

export interface GetFocusListReq {
	contract?: string;
	state?: FocusState;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	limit?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	offset?: number;
}

export interface GetFocusListResp {
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	code?: number;
	message?: string;
	focuses?: FocusContract[];
}

export interface FocusContract {
	id?: string;
	contract?: string;
	contractType?: ContractType;
	eventType?: EventLevelType;
	stageType?: EventStageType;
	/**
	 * @pattern ^\d+$
	 */
	accidentStart?: string;
	/**
	 * @pattern ^\d+$
	 */
	accidentEnd?: string;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	highest?: number;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	lowest?: number;
	remarks?: string;
	/**
	 * @minimum 0
	 * @TJS-type integer
	 */
	predict?: number;
	state?: FocusState;
	details?: FocusDetail[];
	/**
	 * @pattern ^\d+$
	 */
	createDate?: string;
	/**
	 * @pattern ^\d+$
	 */
	updateDate?: string;
}