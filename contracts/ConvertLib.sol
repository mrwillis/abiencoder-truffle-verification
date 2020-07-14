// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;
pragma experimental ABIEncoderV2;


library ConvertLib{
	function convert(uint amount,uint conversionRate) internal pure returns (uint convertedAmount)
	{
		return amount * conversionRate;
	}
}
