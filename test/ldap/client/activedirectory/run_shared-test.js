require('./__helper');

function convertPassword(str){
  var output = '';
  str = '"' + str + '"';

  for(var i = 0; i < str.length; i++){
    output += String.fromCharCode( str.charCodeAt(i) & 0xFF,(str.charCodeAt(i) >>> 8) & 0xFF);
  }

  return output;
}

testActiveDirectory('exec', [ //LDAP BASE will be added automatically! (global.LDAP_BASE)
  {dn:'ou=openrecord', name:'openrecord', objectClass:['top', 'organizationalUnit'], children:[
    {dn:'ou=exec_test', name:'exec_test', objectClass:['top', 'organizationalUnit'], children:[
      {dn:'ou=sub_ou1', name:'sub ou1', objectClass:['top', 'organizationalUnit'], children:[
        {dn:'cn=openerecord_test_user1', name:'Test User 1', objectClass:['top', 'person', 'organizationalPerson', 'user']}, //, sAMAccountName:'openrecord_test_user1', sn:'User1', givenName:'Test', userAccountControl: 544, unicodePwd: convertPassword('my!Sup3rSecret')
        {dn:'cn=openerecord_test_user2', name:'Test User 2', objectClass:['top', 'person', 'organizationalPerson', 'user']},
        {dn:'cn=openerecord_test_user3', name:'Test User 3', objectClass:['top', 'person', 'organizationalPerson', 'user']}
      ]},
      {dn:'ou=sub_ou2', name:'sub ou2', objectClass:['top', 'organizationalUnit'], children:[
        {dn:'cn=openerecord_test_user4', name:'Test User 4', objectClass:['top', 'person', 'organizationalPerson', 'user']},
        {dn:'cn=openerecord_test_user5', name:'Test User 5', objectClass:['top', 'person', 'organizationalPerson', 'user']}
      ]},
      {dn:'ou=sub_ou3', name:'sub ou3', objectClass:['top', 'organizationalUnit'], children:[
        {dn:'cn=openerecord_test_user6', name:'Test User 6', objectClass:['top', 'person', 'organizationalPerson', 'user'], givenName: 'first name', sn: 'last name', sAMAccountName:'test_samaccountname'}
      ]},
      {dn:'ou=sub_ou4', name:'sub ou4', objectClass:['top', 'organizationalUnit'], children:[
      
      ]}
    ]}
  ]}
]);


testActiveDirectory('include', [ //LDAP BASE will be added automatically! (global.LDAP_BASE)
  {dn:'ou=openrecord', name:'openrecord', objectClass:['top', 'organizationalUnit'], children:[
    {dn:'ou=exec_test', name:'exec_test', objectClass:['top', 'organizationalUnit'], children:[
      {dn:'ou=sub_ou1', name:'sub ou1', objectClass:['top', 'organizationalUnit'], children:[
        {dn:'cn=openerecord_test_user1', name:'Test User 1', objectClass:['top', 'person', 'organizationalPerson', 'user']}, //, sAMAccountName:'openrecord_test_user1', sn:'User1', givenName:'Test', userAccountControl: 544, unicodePwd: convertPassword('my!Sup3rSecret')
        {dn:'cn=openerecord_test_user2', name:'Test User 2', objectClass:['top', 'person', 'organizationalPerson', 'user']},
        {dn:'cn=openerecord_test_user3', name:'Test User 3', objectClass:['top', 'person', 'organizationalPerson', 'user']}
      ]},
      {dn:'ou=sub_ou2', name:'sub ou2', objectClass:['top', 'organizationalUnit'], children:[
        {dn:'cn=openerecord_test_user4', name:'Test User 4', objectClass:['top', 'person', 'organizationalPerson', 'user']},
        {dn:'cn=openerecord_test_user5', name:'Test User 5', objectClass:['top', 'person', 'organizationalPerson', 'user']}
      ]},
      {dn:'ou=sub_ou3', name:'sub ou3', objectClass:['top', 'organizationalUnit'], children:[
        {dn:'cn=openerecord_test_user6', name:'Test User 6', objectClass:['top', 'person', 'organizationalPerson', 'user'], givenName: 'first name', sn: 'last name', sAMAccountName:'test_samaccountname'}
      ]},
      {dn:'ou=sub_ou4', name:'sub ou4', objectClass:['top', 'organizationalUnit'], children:[
      
      ]}
    ]}
  ]}
]);