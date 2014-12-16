<div class="userMenu">
<a href="user.php" <?php if ($this->_var['action'] == 'default'): ?>class="curs"<?php endif; ?>> <span></span><?php echo $this->_var['lang']['label_welcome']; ?></a>
<a href="user.php?act=profile"<?php if ($this->_var['action'] == 'profile'): ?>class="curs"<?php endif; ?>> <span></span><?php echo $this->_var['lang']['label_profile']; ?></a>
<a href="user.php?act=profilebank"<?php if ($this->_var['action'] == 'profilebank'): ?>class="curs"<?php endif; ?>> <span></span>银行卡资料</a>
<a href="user.php?act=account_log"<?php if ($this->_var['action'] == 'account_log'): ?>class="curs"<?php endif; ?>><span></span><?php echo $this->_var['lang']['label_user_surplus']; ?></a>

<a href="user.php?act=logout" style="background:none; text-align:right; margin-right:10px;"><img src="themes/default/images/bnt_sign.gif"></a>
</div>