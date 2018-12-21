import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  tableData:Array<any>=[];
  sex:string;
  age:number;
  like:string

  constructor() { 
  	for(var i=0;i<657;i++){
  		if(i%5==0){
  			this.like='游泳'
  		}else if(i%5==3){
  			this.like='跳水'
  		}else{
  			this.like='乒乓'
  		}
  		if(i%3==1){
  			this.sex='男'
  		}else{
  			this.sex='女'
  		}
  		this.tableData.push({
  			name:i+' 号',
  			sex:this.sex,
  			age:i*10/2+10,
  			like:this.like
  		})
  	}
  }

  getMockdata(query):any{
    let data=this.dealQuery(query);
    return data;
  	// return this.tableData;
  }

  // 后台处理代码
  dealQuery(query){
    let last=Math.min()
    return {
      total:this.tableData.length,
      data:this.tableData.slice(query.index*query.size,(query.index+1)*query.size)
    }
  }


}
