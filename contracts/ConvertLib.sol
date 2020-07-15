// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;


library ConvertLib{

	struct TestStruct {
		uint256 name;
	}

	function convert(uint amount,uint conversionRate) internal pure returns (uint convertedAmount)
	{
		return amount * conversionRate;
	}
}
