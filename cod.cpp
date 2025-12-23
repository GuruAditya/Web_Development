#include <iostream>
#include <string>
#include <climits>
#include <algorithm>
#include <vector>
using namespace std;
string lcs(string &str1, string &str2) {
      int m=str1.size();
      int n=str2.size();
      vector<vector<int>> dp(n+1,vector<int>(m+1,0));
      for(int i=0;i<=m;i++){
        dp[i][0]=0;
      }
      for(int j=0;j<=n;j++){
        dp[0][j]=0;
      }
      for(int i=1;i<=m;i++){
        for(int j=1;j<n;j++){
          if(str1[i-1]==str2[j-1]){
            dp[i][j]=1+dp[i-1][j-1];
          }
          else{
            dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
          }
        }
      }
      string ans="";
      int i=m;
      int j=n;
      while(i>0 && j>0){
        if(str1[i-1]==str2[j-1]){
            ans+=str1[i-1];
            i--;
            j--;
        }
        else if(str1[i-1]>str2[j-1]){
            ans+=str1[i-1];
            i--;
        }
        else{
          ans+=str2[j-1];
          j--;
        }
      }
      reverse(ans.begin(),ans.end());
      return ans;
}
int main(){
    string a="groot";
    string b="oot";
    cout<<lcs(a,b);
}